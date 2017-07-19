<template>
  <div :class="`${prefixCls}-tree-node`">
    <div @click.stop="handleClick" v-show="node.visible" :class="[ `${prefixCls}-tree-data`, tree.store.currentNode === node ? `${prefixCls}-tree-active` : '']">
      <div :class="`${prefixCls}-tree-node__content`" :style="{ 'padding-left': (node.level - 1) * 20 + 'px' }">
        <span @click.stop="handleExpandIconClick">
          <n3-icon
            v-show="!node.isLeaf"
            :class="`${prefixCls}-tree-select-icon`"
            :type="(!node.isLeaf && expanded) ? tree.openedIcon : tree.closedIcon"
          >
          </n3-icon>
        </span>
        <span @click.stop="handleUserClick">
          <n3-checkbox
            v-if="showCheckbox"
            :checked="node.checked"
            @change="handleCheckChange"
          >
          </n3-checkbox>
        </span>
        <span :class="`${prefixCls}-tree-loading-box`" v-if="node.loading">
          <n3-loading color="primary" size="xs"></n3-loading>
        </span>
        <n3-icon :type="node.isLeaf ? tree.leafIcon : tree.childIcon"></n3-icon>
        <node-content :node="node"></node-content>
      </div>
      <n3-collapse-transition>
        <div v-show="expanded">
          <div :class="`${prefixCls}-tree-children`">
            <n3-tree-node :render-content="renderContent" v-for="child in node.childNodes" :key="getNodeKey(child)" :node="child">
            </n3-tree-node>
          </div>
        </div>
      </n3-collapse-transition>
    </div>
  </div>
</template>

<script>
  import n3CollapseTransition from '../n3CollapseTransition'
  import n3Checkbox from '../Checkbox/n3Checkbox'

  export default {
    name: 'n3TreeNode',
    props: {
      node: {
        default() {
          return {}
        }
      },
      prefixCls: {
        type: String,
        default: 'n3'
      },
      props: {},
      renderContent: Function
    },
    components: {
      n3Checkbox,
      n3CollapseTransition,
      NodeContent: {
        props: {
          node: {
            required: true
          }
        },
        render(h) {
          const parent = this.$parent
          const node = this.node
          const data = node.data
          const store = node.store
          return (
            parent.renderContent
              ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.tree.$vnode.context, node, data, store })
              : h('span', this.node.label)
          )
        }
      }
    },

    data() {
      return {
        tree: null,
        expanded: false,
        childNodeRendered: false,
        showCheckbox: false,
        oldChecked: null,
        oldIndeterminate: null
      }
    },

    watch: {
      'node.indeterminate'(val) {
        this.handleSelectChange(this.node.checked, val)
      },

      'node.checked'(val) {
        this.handleSelectChange(val, this.node.indeterminate)
      },

      'node.expanded'(val) {
        this.expanded = val
        if (val) {
          this.childNodeRendered = true
        }
      }
    },

    methods: {
      getNodeKey(node, index) {
        const nodeKey = this.tree.nodeKey
        if (nodeKey && node) {
          return node.data[nodeKey]
        }
        return index
      },

      handleSelectChange(checked, indeterminate) {
        if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
          this.tree.$emit('check-change', this.node.data, checked, indeterminate)
        }
        this.oldChecked = checked
        this.indeterminate = indeterminate
      },

      handleClick() {
        const store = this.tree.store
        store.setCurrentNode(this.node)
        this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode)
        this.tree.currentNode = this
        if (this.tree.expandOnClickNode) {
          this.handleExpandIconClick()
        }
        this.tree.$emit('node-click', this.node.data, this.node, this)
      },

      handleExpandIconClick() {
        if (this.expanded) {
          this.node.collapse()
        } else {
          this.node.expand()
        }
      },

      handleUserClick() {
        if (this.node.indeterminate) {
          this.node.setChecked(this.node.checked, !this.tree.checkStrictly)
        }
      },

      handleCheckChange(checked) {
        if (!this.node.indeterminate) {
          this.node.setChecked(checked, !this.tree.checkStrictly)
        }
      }
    },

    created() {
      const parent = this.$parent

      if (parent.isTree) {
        this.tree = parent
      } else {
        this.tree = parent.$parent.tree
      }

      const tree = this.tree
      if (!tree) {
        console.warn('Can not find node\'s tree.')
      }

      const props = tree.props || {}
      this.prefixCls = tree.prefixCls
      
      const childrenKey = props['children'] || 'children'

      this.$watch(`node.data.${childrenKey}`, () => {
        this.node.updateChildren()
      })

      this.showCheckbox = tree.showCheckbox

      if (this.node.expanded) {
        this.expanded = true
        this.childNodeRendered = true
      }
    }
  }
</script>
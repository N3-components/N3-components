<template>
  <div>
    <div :class="`${prefixCls}-tree-node`">
      <div :class="`${prefixCls}-tree-node-data`"></div>
        <span
          :class="[true ? prefixCls + '-tree-active' : '', prefixCls + '-tree-meta-data']"
          @click.prevent="clickHandler(node.value)">
          <span v-if="node.children">
            <n3-icon
              :class="`${prefixCls}-tree-select-icon`"
              :type="expanded ? tree.openedIcon : tree.closedIcon"
              @click.stop="expandIconClickHanlder"
              >
            </n3-icon>
            <span
              :class="`${prefixCls}-tree-loading-box`"
              v-show="loading"
            >
              <n3-loading color="primary" size="xs"></n3-loading>
            </span>
          </span>
          <span :class="`${prefixCls}-tree-select-box`" v-if="!tree.checkable">
            <n3-checkbox :checked="node.value" :on-change="checkChangeHanlder"></n3-checkbox>
          </span>
          <label :class="`${prefixCls}-tree-loading-box`">
            <n3-icon :type="node.icon || tree.icon"></n3-icon>
            <span>{{node.label}}</span>
          </label>
        </span>
      </div>
      <n3-collapse-transition>
        <div :class="`${prefixCls}-tree-children`" v-show="expanded">
          <div :class="`${prefixCls}-tree-nodes`" v-for="child in node.children">
            <n3-tree-node
              class="inner"
              :node="child"
              >
            </n3-tree-node>
          </div>
        </div>
      </n3-collapse-transition>
    </div>
  </div>
</template>

<script>
  import type from '../utils/type'
  import events from '../utils/events'
  import n3CollapseTransition from '../n3CollapseTransition'
  import n3Checkbox from '../n3Checkbox'

  export default {
    name: 'n3TreeNode',
    mixins: [events],
    props: {
      value: {},
      prefixCls: {
        type: String,
        default: 'n3'
      },
      node: {
        type: Object,
        default() {
          return {}
        }
      },
      checkedKeys: {
        type: Array,
        twoway: true,
        default() {
          return []
        }
      },
      expandAll: {
        type: Boolean,
        default: false
      },
      loadData: {
        type: Function,
        default: null
      },
      onRightClick: {
        type: Function,
        default: null
      },
      onSelect: {
        type: Function,
        default: null
      },
      onExpand: {
        type: Function,
        default: null
      },
      onCheck: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        loading: false,
        expanded: false,
        checkable: false
      }
    },

    components: {
      n3CollapseTransition,
      n3Checkbox
    },

    computed: {
      checkable() {
        return this.tree.checkable
      }
    },

    methods: {
      /**
       * Click Handler
       * @param {Number} index Tree index selected.
       * @param {Mixed} value Value selected.
       */
      clickHandler(index, value) {
        const store = this.tree.store
        store.setCurrentNode(this.node)

        this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
        this.tree.currentNode = this;

        if (this.tree.expandOnClickNode) {
          this.expandIconClickHanlder();
        }
        this.tree.$emit('node-click', this.node.data, this.node, this);
      },

      expandIconClickHanlder() {
        if (this.expanded) {
          this.node.collapse()
        } else {
          this.node.expand()
        }
      },

      checkChangeHanlder(checked) {
        if (!this.node.indeterminate) {
          this.node.setChecked(checked, !this.tree.checkStrictly);
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

      if (this.node.expanded) {
        this.expanded = true
      }
    }
  }
</script>
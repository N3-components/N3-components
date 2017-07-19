<template>
  <div class="n3-tree">
    <n3-tree-node
      v-for="child in root.childNodes"
      :node="child"
      :props="props"
      :key="getNodeKey(child)"
      :render-content="renderContent">
    </n3-tree-node>
    <div v-if="!root.childNodes || root.childNodes.length === 0">
      <span>{{ emptyText }}</span>
    </div>
  </div>
</template>

<script>
  import Store from './model/store'
  import n3TreeNode from './n3TreeNode'
  const emptyText = 'Empty Content.'

  export default {
    name: 'n3Tree',
    props: {
      data: {
        type: Array
      },
      prefixCls: {
        type: String,
        default: 'n3'
      },
      emptyText: {
        type: String,
        default () {
          return emptyText
        }
      },
      // 叶子节点图标
      leafIcon: {
        type: String,
        default: 'file'
      },
      // 子节点图标
      childIcon: {
        type: String,
        default: 'folder'
      },
      // 收起树时的图标
      closedIcon: {
        type: String,
        default: 'angle-right'
      },
      // 打开树时的图标
      openedIcon: {
        type: String,
        default: 'angle-down'
      },
      nodeKey: String,
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      expandOnClickNode: {
        type: Boolean,
        default: true
      },
      autoExpandParent: {
        type: Boolean,
        default: true
      },
      defaultCheckedKeys: Array,
      defaultExpandedKeys: Array,
      renderContent: Function,
      showCheckbox: {
        type: Boolean,
        default: false
      },
      props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            icon: 'icon'
          }
        }
      },
      lazy: {
        type: Boolean,
        default: false
      },
      highlightCurrent: Boolean,
      currentNodeKey: [String, Number],
      load: Function,
      filterNodeMethod: Function
    },

    created() {
      this.isTree = true

      this.store = new Store({
        key: this.nodeKey,
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load,
        currentNodeKey: this.currentNodeKey,
        checkStrictly: this.checkStrictly,
        defaultCheckedKeys: this.defaultCheckedKeys,
        defaultExpandedKeys: this.defaultExpandedKeys,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        filterNodeMethod: this.filterNodeMethod
      })

      this.root = this.store.root
    },

    data() {
      return {
        store: null,
        root: null,
        currentNode: null
      }
    },

    components: {
      n3TreeNode
    },

    computed: {
      children: {
        set(value) {
          this.data = value
        },
        get() {
          return this.data
        }
      }
    },

    watch: {
      defaultCheckedKeys(newVal) {
        this.store.defaultCheckedKeys = newVal
        this.store.setDefaultCheckedKey(newVal)
      },
      defaultExpandedKeys(newVal) {
        this.store.defaultExpandedKeys = newVal
        this.store.setDefaultExpandedKeys(newVal)
      },
      currentNodeKey(newVal) {
        this.store.setCurrentNodeKey(newVal)
      },
      data(newVal) {
        this.store.setData(newVal)
      }
    },

    methods: {
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter')
        this.store.filter(value)
      },
      getNodeKey(node, index) {
        const nodeKey = this.nodeKey
        if (nodeKey && node) {
          return node.data[nodeKey]
        }
        return index
      },
      getCheckedNodes(leafOnly) {
        return this.store.getCheckedNodes(leafOnly)
      },
      getCheckedKeys(leafOnly) {
        return this.store.getCheckedKeys(leafOnly)
      },
      setCheckedNodes(nodes, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes')
        this.store.setCheckedNodes(nodes, leafOnly)
      },
      setCheckedKeys(keys, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes')
        this.store.setCheckedKeys(keys, leafOnly)
      },
      setChecked(data, checked, deep) {
        this.store.setChecked(data, checked, deep)
      }
    }
  }
</script>

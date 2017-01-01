<template>
  <div class="n3-tree">
    <n3-tree-node
      v-for="child in data"
      :node="child"
    >
    </n3-tree-node>
    <div v-if="isValidTree">
      <span>{{ emptyText }}</span>
    </div>
  </div>
</template>

<script>
  import Store from './model/store'
  const emptyText = 'Empty Content.'

  export default {
    name: 'n3-tree',

    props: {
      prefixCls: {
        type: String,
        default: 'n3'
      },
      data: {
        type: Array,
        default() {
          return []
        }
      },
      emptyText: {
        type: String,
        default() {
          return ''
        }
      },
      // 节点文本前的图标
      icon: {
        type: String,
        default: 'file'
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
      // 是否按照类型排序
      sort: {
        type: Boolean,
        default: true
      },
      // value 属性名
      selectedKey: {
        type: [String, Number]
      },
      // 是否支持选中
      checkable: {
        type: Boolean,
        default: false
      },
      // 点击展开子节点
      expandOnClickNode: {
        type: Boolean,
        default: false
      }
    },

    created() {
      this.isTree = true

      this.store = new Store({
        instance: this
      })
    },

    data() {
      return {
        currentNode: null,
        currentNodeKey: ''
      };
    },

    components: {
      N3TreeNode: require('./n3TreeNode')
    },

    computed: {
      isValidTree() {
        return this.data.length
      }
    },

    watch: {
      currentNodeKey(newVal) {
        this.store.setCurrentNodeKey(newVal)
      },
      data(newVal) {
        this.store.setData(newVal)
      }
    },

    methods: {
      getCheckedKeys() {
        return this.store.getCheckedKeys()
      },
      setCheckedKeys(keys) {
        this.store.setCheckedKeys(keys)
      }
    }
   }
</script>
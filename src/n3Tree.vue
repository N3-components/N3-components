<template>
  <div :class="`${prefixCls}-tree`">
    <div :class="`${prefixCls}-tree-node-data`" v-for="(index, node) in data">
      <div :class="`${prefixCls}-tree-node`">
        <span :class="[isSelected(node.value) ? prefixCls + '-tree-active' : '', prefixCls + '-tree-meta-data']" @click.prevent="clickHandler(index, node.value)">
          <template v-if="node.children">
            <n3-icon
              :class="`${prefixCls}-tree-select-icon`"
              :type="isOpened(index) ? treeOpenIcon : treeIcon">
            </n3-icon>
            <span :class="`${prefixCls}-tree-loading-box`" v-show="loading > -1 && loading == index">
              <n3-loading color="primary" size="xs"></n3-loading>
            </span>
          </template>
          <span :class="`${prefixCls}-tree-select-box`" v-if="checkable">
            <input 
              @click.stop="" 
              type="checkbox" 
              v-model="checkedKeys" 
              :value="node.value"
              @change="checkHandler(index, node.value)"/>
          </span>
          <label :class="`${prefixCls}-tree-loading-box`">
            <n3-icon :type="node['icon'] || icon"></n3-icon>
            <span v-html="node.label"></span>
          </label>
        </span>
      </div>
      <div :transition="transition" v-if="areValidNodes(node.children)" :class="`${prefixCls}-tree-children`" v-show="isOpened(index)">
        <div :class="`${prefixCls}-tree-nodes`">
          <n3-tree 
            class="inner" 
            :id="id"
            :selected-key.sync="selectedKey"
            :data.sync="node.children"
            :parent.once="node.value"
            :load-data="loadData"
            :expand-all="expandAll"
            :checkable="checkable"
            :checked-keys.sync="checkedKeys"
            :on-select="onSelect"
            :on-check="onCheck"
            :sort="sort"
          >
          </n3-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import type from './utils/type'

export default {
  name: 'n3Tree',
  props: {
    id: {
      type: Number,
      default: ''
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    sort: {
      type: Boolean,
      default: true
    },
    prefixCls: {
      type: String,
      default: 'n3'
    },
    selectedKey: {
      type: [String, Number]
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checkedKeys: {
      type: Array,
      twoway: true,
      default () {
        return []
      }
    },
    parent: {
      type: Number,
      default: undefined
    },
    treeIcon: {
      type: String,
      default: 'angle-right'
    },
    treeOpenIcon: {
      type: String,
      default: 'angle-down'
    },
    expandAll: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'file'
    },
    transition: {
      type: String,
      default: 'collapse'
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
  data () {
    return {
      loading: -1
    }
  },
  methods: {
    /**
     * Click Handler
     * @param {Number} index Tree index selected.
     * @param {Mixed} value Value selected.
     */
    clickHandler (index, value) {
      // Select Node
      this.select(index, value)

      let node = this.data[index]
      // lazyLoadFlag：节点未打开，节点无子节点
      let lazyLoadFlag = !node.isOpened && node.children && node.children.length === 0 && type.isFunction(this.loadData)
      if (lazyLoadFlag) {
        this.lazyLoadHandler(index, value)
      } else {
        this.toggleOpen(index)
      }
    },

    lazyLoadHandler(index, value) {
      let self = this
      this.loading = index
      let promise = this.loadData(value)
      if (type.isPromise(promise)) {
        promise.then(res => {
          if (!type.isArray(res)) {
            console.error(`Loaded Data should be an array: ${res}`)
            return
          }
          self.$set(`data[${index}].children`, res)
          if (self.checkable && self.isChecked(value)) {
            [].push.apply(self.checkedKeys, res.map(item => item.value).filter(item => item !== undefined))
          }
          self.loading = -1
          self.toggleOpen(index)
        })
      }
    },

    /**
     * Selects a node from tree view
     * @param {Number} index Tree index selected.
     * @param {Mixed} value Value selected.
     */
    select (index, value) {
      this.selectedKey = value
      if (type.isFunction(this.onSelect)) {
        try {
          this.onSelect(this.selectedKey)
        } catch (error) {
          console.error(error)
        }
      }
    },

    /**
     * Toggles open / close node.
     * @param {Number} index
     */
    toggleOpen (index) {
      if (type.isFunction(this.onExpand)) {
        try {
          this.onExpand(this.data[index])
        } catch (error) {
          console.error(error)
        }
      }
      // Init
      if (this.data[index].isOpened === undefined) {
        this.$set('data[' + index + '].isOpened', this.expandAll && this.hasSelectedChild(index))
      }
      // General
      this.$set('data[' + index + '].isOpened', !this.data[index].isOpened)
    },

    /**
     * Returns flag indicating if nodes are valid or not.
     * @param {Array} nodes
     */
    areValidNodes (nodes) {
      return nodes !== undefined && type.isArray(nodes) && nodes.length > 0
    },

    /**
     * Returns flag indicating if tree view has a node selected.
     * @return {Boolean}
     */
    hasSelected () {
      for (let i in this.data) {
        if (this.isSelected(this.data[i].value) || this.hasSelectedChild(i)) {
          return true
        }
      }
      return false
    },

    /**
     * Returns flag indicating if node at specified index has a child selcted or not.
     * @param {Number} index
     * @return {Boolean}
     */
    hasSelectedChild (index) {
      // if (!this.checkable) {
      //   return false
      // }
      for (let i in this.$children) {
        if (this.$children[i].parent === this.data[index].value && this.$children[i].hasSelected && this.$children[i].hasSelected()) {
          return true
        }
      }
      return false
    },

    /**
     * Returns flag indicating if node at specified index is selected or not.
     * @param {Number} index
     * @return {Boolean}
     */
    isSelected (value) {
      return this.selectedKey !== undefined && this.selectedKey === value
    },

    /**
     * Returns flag indicating if node is opened or not.
     * @param {Number} index
     * @return {Boolean}
     */
    isOpened (index) {
      return (this.data[index].isOpened !== undefined && this.data[index].isOpened) || this.hasSelectedChild(
        index)
    },

    /**
     * CheckHandler
     * @param {Number} index Tree index selected.
     * @param {Mixed} value Value selected.
     */
    checkHandler (index, value) {
      let flag = this.isChecked(value)
      this.$broadcast('n3@changeChildChecked', value, flag)
      this.$dispatch('n3@changeParentChecked', this.parent)
      if (type.isFunction(this.onCheck)) {
        try {
          this.onCheck(this.checkedKeys)
        } catch (error) {
          console.error(error)
        }
      }
    },

    /**
     * Check All Node
     * @param {Boolean} flag
     */
    checkAll (flag) {
      let value
      let checkedKeys = this.checkedKeys
      for (let index = 0; index < this.data.length; index++) {
        value = this.data[index].value
        if (!this.isChecked(value) && flag) {
          checkedKeys.push(value)
          this.$broadcast('n3@changeChildChecked', value, true)
        }
        if (this.isChecked(value) && !flag) {
          checkedKeys.$remove(value)
          this.$broadcast('n3@changeChildChecked', value, false)
        }
      }
    },

    _sort () {
      this.data = this.data.sort((a, b) => {
        return !a.children || b.children
      })
    },

    /**
     * Expand Some Nodes
     */
    expand () {
      let self = this
      // Async load doesn't support expanding all
      if (self.expandAll && !type.isFunction(self.loadData)) {
        self.data.forEach((item, index) => {
          self.$set('data[' + index + '].isOpened', true)
        })
      }
    },

    /**
     * Check Node Checked
     */
    isChecked(value) {
      return this.checkedKeys.indexOf(value) > -1
    }
  },

  events: {
    /**
     * Refresh Children Checked(向下广播)
     */
    'n3@changeChildChecked' (parent, value) {
      if (this.parent === parent) {
        this.checkAll(value)
      }
    },

    /**
     * Refresh Parent Checked(向上冒泡)
     * @param {Mixed} parent 源节点的parent value
     */
    'n3@changeParentChecked' (parent) {
      let node
      let children
      let j
      let checkedKeys = this.checkedKeys

      for (let index = 0; index < this.data.length; index++) {
        node = this.data[index]
        children = node.children
        // 当前节点为源节点的父节点时
        if (parent === node.value) {
          for (j = 0; j < children.length; j++) {
            // 子节点未全部选中，父节点改为未选中状态
            if (!this.isChecked(children[j].value)) {
              if (this.isChecked(node.value)) {
                checkedKeys.$remove(node.value)
                this.$dispatch('n3@changeParentChecked', this.parent)
              }
              break
            }
          }
          // 子节点全部被选中，父节点改为选中状态
          if (j === children.length && !this.isChecked(node.value)) {
            checkedKeys.push(node.value)
            this.$dispatch('n3@changeParentChecked', this.parent)
          }
          break
        }
      }
    }
  },

  created () {
    if (!this.id) this.id = this._uid
  },

  ready () {
    if (this.sort) {
      this._sort()
    }
    this.expand()
  }
}
</script>
<template>
  <div class="{{prefixCls}}-tree">
    <div class="{{prefixCls}}-tree-node-data" v-for="(index, node) in data">
      <div class="{{prefixCls}}-tree-node">
        <span :class="[isSelected(node.value) ? prefixCls + '-tree-active' : '',prefixCls + '-tree-meta-data']" 
              @click.prevent="clickHandler(index, node.value)">
          <template v-if="node.children">
            <n3-icon
              class="{{prefixCls}}-tree-select-icon"
              :type="isOpened(index) ? treeOpenIcon : treeIcon">
            </n3-icon>
            <span class="{{prefixCls}}-tree-loading-box" v-show="loading > -1 && loading == index">
              <n3-loading color="primary" size="xs"></n3-loading>
            </span>
          </template>
          <span class="{{prefixCls}}-tree-select-box" v-if="checkable">
            <input 
              @click.stop="" 
              type="checkbox" 
              v-model="checkedKeys" 
              :value="node.value"
              @change="checkHandler(index, node.value)"/>
          </span>
          <label class="{{prefixCls}}-tree-loading-box">
          <n3-icon :type="node['icon'] || icon"></n3-icon>
          {{{node.label}}}
          </label>
        </span>
      </div>
      <div 
        :transition="transition"
        v-if="areValidNodes(node.children)" 
        class="{{prefixCls}}-tree-children" 
        v-show="isOpened(index)">
        <div class="{{prefixCls}}-tree-nodes">
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
            :on-check="onCheck">
          </n3-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import type from 'get-type'

  export default {
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
        let self = this
        let node = self.data[index]
        // Firstly Select Node
        self.select.apply(self, arguments)
        if (type.isFunction(self.loadData) && !node.isOpened && node.children && node.children.length === 0) {
          self.loading = index
          self.loadData(value).then(res => {
            if (!type.isArray(res)) {
              console.error(`Loaded Data should be an array: ${res}`)
              return
            }
            self.$set(`data[${index}]['children']`, res)
            self.loading = -1
            // Secondly Open Node
            self.toggleOpen(index)
          })
        } else {
          self.toggleOpen(index)
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
          this.$set('data[' + index + '].isOpened', this.hasSelectedChild(index))
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
        for (var i in this.$children) {

          if (this.$children[i].parent === this.data[index].value && this.$children[i].hasSelected && this.$children[i].hasSelected())
            return true
        }
        return false
      },

      /**
       * Returns flag indicating if node at specified index is selected or not.
       * @param {Number} index
       * @return {Boolean}
       */
      isSelected (value) {
        return this.selectedKey === value
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
        let flag = this.checkedKeys.indexOf(value) > -1
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
       * Check All
       * @param {Boolean} flag
       */
      checkAll (flag) {
        let value
        let checkedKeys = this.checkedKeys
        for (let index = 0; index < this.data.length; index++) {
          value = this.data[index]['value']
          if (checkedKeys.indexOf(value) === -1 && flag) {
            checkedKeys.push(value)
          }

          if (!flag) {
            checkedKeys.$remove(value)
          }
          this.$broadcast('n3@changeChildChecked', value, flag)
        }
        this.$dispatch('n3@changeParentChecked', this.parent)
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
      }
    },

    events: {
      /**
       * Refresh Children Checked
       */
      'n3@changeChildChecked' (parent, value) {
        if (this.parent === parent) {
          this.checkAll(value)
        }
      },

      /**
       * Refresh Parent Checked
       */
      'n3@changeParentChecked' (parent) {
        let node
        let children
        let checkedKeys = this.checkedKeys

        for (let index = 0; index < this.data.length; index++) {
          node = this.data[index]
          children = node.children
          if (parent === node.value) {
            let j
            for (j = 0; j < children.length; j++) {
              if (checkedKeys.indexOf(children[j].value) === -1) {
                if (checkedKeys.indexOf(node.value) !== -1) {
                  checkedKeys.$remove(node.value)
                  this.$dispatch('n3@changeParentChecked', this.parent)
                }
                break
              }
            }
            if (j === children.length && checkedKeys.indexOf(node.value) === -1) {
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
      this.expand()
    }
  }
</script>
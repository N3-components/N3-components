<template>
  <div class="{{prefixCls}}-treeview">
    <div class="node-data" v-for="(index, node) in model">
      <div class="node">
        <span class="select-box" v-if="checkable">
          <input type="checkbox" v-model="node['isChecked']" @change="checkHandler(index, node[valuename])">
        </span>
        <span class="meta-data" :class="{'active': isSelected(index)}" @click.prevent="clickHandler(index, node[valuename])">
          <template v-if="node[children] || node['tree']">
            <n3-icon :type="isOpened(index) && areValidNodes(node[children]) ? treeOpenIcon : treeIcon"></n3-icon>
            <span class="loading-box" v-show="loading > -1 && loading == index">
              <n3-loading color="primary" size="xs"></n3-loading>
            </span>
          </template>
          <template v-else>
            <n3-icon :type="nodeIcon"></n3-icon>
          </template>
          <label>{{{node[labelname]}}}</label></span>
      </div>
      <div v-if="areValidNodes(node[children])" class="children" v-show="isOpened(index)">
        <div class="margin"></div>
        <div class="nodes">
          <n3-treeview  class="inner" :id="id" :value.sync="value" :labelname="labelname" :valuename="valuename" :children="children" :model.sync="node[children]" :parent.once="node[valuename]" :load-data="loadData" :default-expand-all="defaultExpandAll" :checkable="checkable" :on-check="onCheck"></n3-treeview>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .active {
    color: #069dd6;
  }
  
  .node-data {
    padding-left: 12px;
  }
</style>

<script>
  import type from 'get-type'

  export default {
    name: 'n3Treeview',
    props: {
      /**
       * Unique identifier for treeview.
       */
      id: {
        type: String,
        default: 'n3_' + Math.ceil(Math.random() * 100000)
      },
      value: [String, Number],
      model: {
        type: Array,
        default: function() {
          return []
        }
      },
      /**
       * Preifix CSS class to apply to component.
       */
      prefixCls: {
        type: String,
        default: 'n3'
      },
      children: {
        type: String,
        default: 'nodes'
      },
      labelname: {
        type: String,
        default: 'label'
      },
      valuename: {
        type: String,
        default: 'value'
      },
      multiple: {
        type: Boolean,
        default: true
      },
      checkable: {
        type: Boolean,
        default: false
      },
      checkedKeys: {
        type: Array,
        default() {
          return []
        }
      },
      parent: {
        type: Number,
        default: undefined
      },
      treeIcon: {
        type: String,
        default: 'folder'
      },
      treeOpenIcon: {
        type: String,
        default: 'folder-o'
      },
      defaultExpandAll: {
        type: Boolean,
        default: false
      },
      defaultExpandedKeys: {
        type: Array,
        default() {
          return []
        }
      },
      nodeIcon: {
        type: String,
        default: 'file'
      },
      transition: {
        type: String,
        default: ''
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
        loading: -1
      }
    },
    methods: {
      /**
       * Click Handler
       * @param {Number} index Tree index selected.
       * @param {Mixed} value Value selected.
       */
      clickHandler(index, value) {
        let self = this
        let node = self.model[index]
        // Firstly Select Node
        self.select.apply(self, arguments)
        if (type.isFunction(self.loadData) && !(type.isArray(node.children) && node.children.length > 0) && node.tree) {
          self.loading = index
          self.loadData(value).then(res => {
            if (!type.isArray(res)) {
              console.error(`Loaded Data should be an array: ${res}`)
              return
            }
            self.$set(`model[${index}][${self.children}]`, res)
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
      select(index, value) {
        if (type.isFunction(this.onSelect)) {
          try {
            this.onSelect(this.model[index])
          } catch (error) {
            console.error(error)
          }
        }
        // Unselect from current level, children and parents
        this.$set('value', value)
      },

      /**
       * Toggles open / close node.
       * @param {Number} index
       */
      toggleOpen(index) {
        if (type.isFunction(this.onExpand)) {
          try {
            this.onExpand(this.model[index])
          } catch (error) {
            console.error(error)
          }
        }
        // Return if no children
        if (!this.areValidNodes(this.model[index][this.children])) {
          return
        }
        // Init
        if (this.model[index].isOpened == undefined) {
          this.$set('model[' + index + '].isOpened', this.hasSelectedChild(index))
        }
        // General
        this.$set('model[' + index + '].isOpened', !this.model[index].isOpened)
      },

      /**
       * Returns flag indicating if nodes are valid or not.
       * @param {Array} nodes
       */
      areValidNodes(nodes) {
        return nodes != undefined && Object.prototype.toString.call(nodes) === '[object Array]' && nodes.length > 0
      },

      /**
       * Returns flag indicating if tree view has a node selected.
       * @return {Boolean}
       */
      hasSelected() {
        for (var i in this.model) {
          if (this.isSelected(i) || this.hasSelectedChild(i)) {
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
      hasSelectedChild(index) {
        for (var i in this.$children) {
          if (this.$children[i].parent == index && this.$children[i].hasSelected())
            return true
        }
        return false
      },

      /**
       * Returns flag indicating if node at specified index is selected or not.
       * @param {Number} index
       * @return {Boolean}
       */
      isSelected(index) {
        return this.value && this.model[index][this.valuename] == this.value
      },

      /**
       * Returns flag indicating if node is opened or not.
       * @param {Number} index
       * @return {Boolean}
       */
      isOpened(index) {
        return (this.model[index].isOpened != undefined && this.model[index].isOpened) || this.hasSelectedChild(
          index)
      },

      /**
       * CheckHandler
       * @param {Number} index Tree index selected.
       * @param {Mixed} value Value selected.
       */
      checkHandler(index, value) {
        let flag = this.model[index].isChecked
        this.$broadcast('changeChildChecked', value, flag)
        this.$dispatch('changeParentChecked', this.parent)
        if (type.isFunction(this.onCheck)) {
          try {
            this.onCheck()
          } catch (error) {
            console.error(error)
          }
        }
      },
      
      /**
       * Check All
       * @param {Boolean} flag
       */
      checkAll(flag) {
        let value
        for (let index = 0; index < this.model.length; index++) {
          value = this.model[index][this.valuename]
          this.$set('model[' + index + '].isChecked', flag)
          this.$broadcast('changeChildChecked', value, flag)
        }
        this.$dispatch('changeParentChecked', this.parent)
      },

      /**
       * Expand Some Nodes
       */
      expand() {
        let self = this
        // Async load doesn't support expanding all
        if (self.defaultExpandAll && !type.isFunction(self.loadData)) {
          self.model.forEach((item, index) => {
             self.$set('model[' + index + '].isOpened', true)
          })
        }
      },

      /**
       * Sort this.model And Stick Tree
       */
      sort() {
        let self = this
        this.model = this.model.sort((a, b) => {
          return (b[self.children] || b['tree']) && !(a[self.children] || a['tree'])
        })
      }
    },

    events: {
      /**
       * Refresh Children Checked
       */
      changeChildChecked(parent, value) {
        if (this.parent == parent) {
          this.checkAll(value)
        }
      },

      /**
       * Refresh Parent Checked
       */
      changeParentChecked(parent) {
        let node
        let children
        for (let index = 0; index < this.model.length; index++) {
          node = this.model[index]
          children = node[this.children]
          if (parent == node[this.valuename]) {
            let j 
            for (j = 0; j < children.length; j++) {
              if (!children[j].isChecked) {
                this.$set('model[' + index + '].isChecked', false)
                this.$dispatch('changeParentChecked', this.parent)
                break
              }
            }
            if (j === children.length) {
              this.$set('model[' + index + '].isChecked', true)
              this.$dispatch('changeParentChecked', this.parent)
            }
            break
          }
        }
      }
    },

    ready() {
      this.sort()
      this.expand()
    }
  }
</script>
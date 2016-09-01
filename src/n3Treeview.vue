<template>
  <div class="{{prefixCls}}-treeview">
    <div class="node-data" v-for="(index, node) in model">
      <div class="node">
        <!--<span class="select-box">
          <input type="checkbox" v-model="node['isChecked']" @change="checkHandler(node)">
        </span>-->
        <span class="meta-data" :class="{'active': isSelected(index)}" @click.prevent="clickHandler(index, node[valuename])">
          <template v-if="node[children] || node['tree']">
            <n3-icon :type="isOpened(index) ? treeOpenIcon : treeIcon"></n3-icon>
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
          <n3-treeview :id="id" :value.sync="value" :labelname="labelname" :valuename="valuename" :children="children"
             :model.sync="node[children]" :parent.once="index" class="inner" :load-data="loadData" :default-expand-all="defaultExpandAll"></n3-treeview>
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
      clickHandler: function(index, value) {
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
      select: function(index, value) {
        if (type.isFunction(this.onSelect)) {
          try {
            this.onSelect()
          } catch (error) {
            console.error(error)
          }
        }
        // Unselect from current level, children and parents
        this.$set('value', value)
        
        // Call to event.
        this.$dispatch('treeview_click', {
          label: this.model[index][this.labelname],
          value: this.model[index][this.valuename],
        })
      },

      /**
       * Toggles open / close node.
       * @param {Number} index
       */
      toggleOpen: function(index) {
        if (type.isFunction(this.onExpand)) {
          try {
            this.onExpand()
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
      areValidNodes: function(nodes) {
        return nodes != undefined && Object.prototype.toString.call(nodes) === '[object Array]' && nodes.length > 0
      },

      /**
       * Returns flag indicating if tree view has a node selected.
       * @return {Boolean}
       */
      hasSelected: function() {
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
      hasSelectedChild: function(index) {
        for (var i in this.$children) {
          if (this.$children[i].parent == index && this.$children[i].hasSelected())
            return true;
        }
        return false;
      },

      /**
       * Returns flag indicating if node at specified index is selected or not.
       * @param {Number} index
       * @return {Boolean}
       */
      isSelected: function(index) {
        return this.value && this.model[index][this.valuename] == this.value
      },

      /**
       * Returns flag indicating if node is opened or not.
       * @param {Number} index
       * @return {Boolean}
       */
      isOpened: function(index) {
        return (this.model[index].isOpened != undefined && this.model[index].isOpened) || this.hasSelectedChild(
          index)
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

    ready() {
      this.sort()
      this.expand()
    }
  }
</script>
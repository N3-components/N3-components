<template>
  <div class="{{prefixCls}}-btn-group {{prefixCls}}-select-group" >
    <n3-button  
      :style="{width:width}"
      :disabled="disabled"
      :size="size"
      class="{{prefixCls}}-dropdown-toggle"
      @click="toggleDropdown">

      <span  v-if="showPlaceholder || !showselected">{{placeholder}}</span>
      <span  v-if="showselected" >
        <template v-for="item in selectedItems">
          {{{format.call(this._context,item)}}}
        </template>
      </span>
      <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
      <n3-badge v-if="badge">{{badge}}</n3-badge>
    </n3-button>
    <ul 
      :style="{maxHeight:menuMaxHeight,width:menuWidth}" 
      class="{{prefixCls}}-dropdown-menu" 
      v-el:menu 
      v-show="show" 
      transition="fadeDown">
        <li v-if="search">
          <n3-input
            class="{{prefixCls}}-select-search"
            :placeholder="inputPlaceholder"
            :value.sync="searchText"
            @keydown.enter="addExtra"
          ></n3-input>
          <n3-icon type="plus-square-o" v-if="extra" @click="addExtra"></n3-icon>
        </li>
        <li v-if="multiple" class="{{prefixCls}}-select-all">
          <a @click.prevent="selectAll">
            全选
           <n3-icon type="check" v-show="allSelected"></n3-icon>
          </a>
        </li>

        <template v-if="options.length">
          <li v-for="option in options | filterSearch searchText " 
              :value="option.value" 
              style="position:relative">
            <a @click.prevent="select(option)" >
              {{{ option.label }}} 
              <n3-icon type="check" v-show="findIndex(option.value) !== -1"></n3-icon>
            </a>
          </li>
        </template>
        <slot v-else ></slot>
      <div class="{{prefixCls}}-notify" v-show="showNotify" transition="fade">最多选择 {{limit}} 项</div>
    </ul>
    <div class="clearfix"></div>
    <validate
      :name="name"
      :rules="rules"
      :valid-status.sync="validStatus"
      :custom-validate="customValidate" 
      :value="value"
      :results.sync="validateResults">
    </validate>
  </div>
</template>

<script>
import EventListener from './utils/EventListener'
import n3Button from './n3Button'
import n3Badge from './n3Badge'
import n3Icon from './n3Icon'
import n3Input from './n3Input'
import valMixin from './valMixin'
import validate from './validate'
import type from './utils/type'

export default {
  mixins: [valMixin],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showselected: {
      type: Boolean,
      default: true
    },
    inputPlaceholder: {
      type: String,
      default: '输入...'
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      twoWay: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    extra: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1024
    },
    width: {
      type: String
    },
    menuMaxHeight: {
      type: String,
      default: '300px'
    },
    menuWidth: {
      type: String
    },
    onChange: {
      type: Function
    },
    format: {
      type: Function,
      default (item) {
        return item.label
      }
    },
    cancelled: {
      type: Boolean,
      default: true
    },
    badge: {
      type: [String, Number]
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      searchText: '',
      show: false,
      showNotify: false
    }
  },
  watch: {
    value (val) {
      if (type.isFunction(this.onChange)) {
        this.onChange(val)
      }
    }
  },
  components: {
    n3Button,
    n3Badge,
    n3Icon,
    n3Input,
    validate
  },
  computed: {
    valueArray: {
      get () {
        var a
        if (type.isArray(this.value)) {
          a = this.value
        } else {
          a = [this.value]
        }
        return this.findInOptions(a)
      },
      set (value) {
        let self = this
        if (this.multiple) {
          let ret = []
          for (let i = 0; i < value.length; i++) {
            ret.push(value[i].value)
          }
          let timeout
          if (timeout) clearTimeout(timeout)
          if (ret.length > this.limit) {
            this.showNotify = true
            this.remove(value, this.limit)
            timeout = setTimeout(() => {
              self.showNotify = false
            }, 1000)
          } else {
            this.value = ret
          }
        } else {
          this.value = value[0] ? value[0].value : ''
        }
      }
    },
    allSelected () {
      var options = this.filter(this.options, this.searchText)
      var values = this.value

      if (!values || options.length !== values.length || options.length === 0) {
        return false
      }

      for (var i = 0, l = options.length; i < l; i++) {
        var value = options[i].value
        if (values.indexOf(value) === -1) {
          return false
        }
      }
      return true
    },
    selectedItems () {
      var ret = []
      var a = this.valueArray

      for (var i = 0; i < a.length; i++) {
        ret.push(a[i])
      }
      return ret
    },
    showPlaceholder () {
      if (type.isArray(this.value)) {
        return this.value.length <= 0
      } else {
        return type.isNullOrUndefined(this.value) || this.value === ''
      }
    }
  },
  ready () {
    if (!this.options.length) {
      var options = this.$els.menu.querySelectorAll('.' + this.prefixCls + '-option')
      var ret = []

      for (var i = 0, l = options.length; i < l; i++) {
        var value = options[i].getAttribute('value')
        var label = options[i].innerHTML

        ret.push({value: value, label: label})
      }
      this.options = ret
    }
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (!this.$el.contains(e.target)) this.show = false
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
  },
  filters: {
    filterSearch (value, search) {
      return this.filter(value, search)
    }
  },
  methods: {
    filter (value, search) {
      if (search === '') return value
      var ret = []
      for (var i = 0, l = value.length; i < l; i++) {
        if (value[i] && String(value[i].label).replace(/<.*?>/g, '').indexOf(search) > -1) {
          ret.push(value[i])
        }
      }
      return ret
    },
    selectAll () {
      if (this.allSelected) {
        this.valueArray = []
      } else {
        this.valueArray = this.filter(this.options, this.searchText)
      }
    },
    addExtra () {
      if (this.extra && this.searchText.replace(/\s+$|^\s+/g, '')) {
        this.options.push({value: this.searchText, label: this.searchText})
        this.add({value: this.searchText, label: this.searchText})
        this.searchText = ''
      }
    },
    findInOptions (a) {
      var options = this.options
      var ret = []

      for (var i = 0; i < a.length; i++) {
        var s = this.find(a[i], options)
        s != null ? ret.push(s) : 0
      }
      return ret
    },
    find (v, array) {
      var a = array || this.valueArray
      for (var i = 0; i < a.length; i++) {
        if (v === a[i].value) {
          return a[i]
        }
      }
      return null
    },
    findIndex (v, array) {
      var a = array || this.valueArray
      for (var i = 0; i < a.length; i++) {
        if (v === a[i].value) {
          return i
        }
      }
      return -1
    },
    add (option) {
      var a = this.valueArray.slice(0)
      if (this.multiple) {
        a.push(option)
      } else {
        a = [option]
      }
      this.valueArray = a
    },
    remove (array, index, num) {
      var a = array.slice(0)
      num ? a.splice(index, num) : a.splice(index)
      this.valueArray = a
    },
    select (option) {
      var index = this.findIndex(option.value)
      if (this.multiple) {
        index === -1 ? this.add(option) : this.remove(this.valueArray, index, 1)
      } else {
        index === -1 ? this.valueArray = [option] : this.cancelled ? this.valueArray = [] : 0
        this.show = false
      }
    },
    toggleDropdown () {
      if (!this.disabled && !this.readonly) {
        this.show = !this.show
      }
    }
  }
}
</script>
<template>
  <div :class="`${prefixCls}-btn-group ${prefixCls}-select-group`" >
    <n3-button
      :style="{width:width}"
      :disabled="disabled"
      :size="size"
      :class="[`${prefixCls}-dropdown-toggle`,`${prefixCls}-select-btn`,showselected&&multiple&&value.length ? `${prefixCls}-select-multiple` : '']"
      @click.native="toggleDropdown">
        <span  v-if="showPlaceholder || !showselected">{{placeholder}}</span>
        <span  v-if="showselected" >
          <template v-for="item in selectedItems" v-if="multiple">
            <render 
              @click.native.prevent.stop="del(item)"
              :class="`${prefixCls}-selected-tag`" 
              :context="context || $parent._self"
              :template="format(item)">
            </render>
          </template>
          <template v-else>
            <render :context="context || $parent._self" :template="format(selectedItems[0])"></render>
          </template>
        </span>
      <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
    </n3-button>
    <transition name="fadeDown">
      <ul 
        :style="{maxHeight:menuMaxHeight,width:menuWidth}" 
        :class="`${prefixCls}-dropdown-menu`" 
        ref="menu" 
        v-n3-position="show"
        v-show="show">
          <li v-if="search">
            <input
              :class="`${prefixCls}-select-search`"
              :placeholder="inputPlaceholder"
              v-model="searchText"
              @keydown.native.enter="addExtra"
            ></input>
            <n3-icon type="plus-square-o" v-if="extra" @click.native="addExtra"></n3-icon>
          </li>
          <li v-if="multiple" :class="`${prefixCls}-select-all`">
            <a @click.prevent="selectAll">
              {{getL('all')}}
             <n3-icon type="check" v-show="allSelected"></n3-icon>
            </a>
          </li>

          <template v-if="currentOptions.length">
            <li v-for="option in filterOptions" 
                :value="option.value" 
                style="position:relative">
              <a @click.prevent="select(option)" >
                <span v-html="option.label"></span>
                <n3-icon type="check" v-show="findIndex(option.value) !== -1"></n3-icon>
              </a>
            </li>
          </template>
          <slot v-else ></slot>
        <div :class="`${prefixCls}-notify`" v-show="showNotify" transition="fade">最多选择 {{limit}} 项</div>
      </ul>
    </transition>
    <div class="clearfix"></div>
    <validate
      :name="name"
      :rules="rules"
      :custom-validate="customValidate" 
      :current="value">
    </validate>
  </div>
</template>

<script>
import EventListener from '../utils/EventListener'
import n3Button from '../Button/n3Button'
import n3Icon from '../Icon/n3Icon'
import valMixin from '../Mixin/valMixin'
import render from '../render'
import validate from '../validate'
import type from '../utils/type'
import localeMixin from '../Mixin/localeMixin'

export default {
  name: 'n3Select',
  mixins: [valMixin,localeMixin('n3Select')],
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
      default: ''
    },
    size: {
      type: String
    },
    context: {

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
    },
    placeholder: {
      type: String,
      default: ''
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
    matchCase: {
      type: Boolean
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
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      searchText: '',
      show: false,
      showNotify: false,
      currentValue: this.value,
      currentOptions: this.options
    }
  },
  watch: {
    value (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      this.currentValue = val
    },
    options (val) {
      this.currentOptions = val
    },
    currentValue (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  components: {
    n3Button,
    n3Icon,
    render,
    validate
  },
  computed: {
    filterOptions () {
      return this.filter(this.currentOptions, this.searchText)
    },
    valueArray: {
      get () {
        var a
        if (type.isArray(this.currentValue)) {
          a = this.currentValue
        } else {
          a = [this.currentValue]
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
            this.currentValue = ret
          }
        } else {
          this.currentValue = value[0] ? value[0].value : ''
        }
      }
    },
    allSelected () {
      var options = this.filter(this.currentOptions, this.searchText)
      var values = this.currentValue

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
      if (type.isArray(this.currentValue)) {
        return this.currentValue.length <= 0
      } else {
        return type.isNullOrUndefined(this.currentValue) || this.currentValue === ''
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.currentOptions.length) {
        var options = this.$refs.menu.querySelectorAll('.' + this.prefixCls + '-option')
        var ret = []

        for (var i = 0, l = options.length; i < l; i++) {
          var value = options[i].getAttribute('value')
          var label = options[i].innerHTML

          ret.push({value: value, label: label})
        }
        this.currentOptions = ret
      }
      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!this.$el.contains(e.target)) this.show = false
      })
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
  },
  methods: {
    filter (value, search) {
      if (search === '') return value
      var ret = []
      for (var i = 0, l = value.length; i < l; i++) {
        var v = value[i] && String(value[i].label).replace(/<.*?>/g, '')
        var s = search

        if (this.matchCase) {
          v = v.toLocaleLowerCase()
          s = s.toLocaleLowerCase()
        }

        if (v !='' && v.indexOf(s) > -1) {
          ret.push(value[i])
        }
      }
      return ret
    },
    selectAll () {
      if (this.allSelected) {
        this.valueArray = []
      } else {
        this.valueArray = this.filter(this.currentOptions, this.searchText)
      }
    },
    addExtra () {
      if (this.extra && this.searchText.replace(/\s+$|^\s+/g, '')) {
        this.currentOptions.push({value: this.searchText, label: this.searchText})
        this.add({value: this.searchText, label: this.searchText})
        this.searchText = ''
      }
    },
    findInOptions (a) {
      var options = this.currentOptions
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
    del (item) {
      var index = this.findIndex(item.value)
      this.remove(this.valueArray, index, 1)
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
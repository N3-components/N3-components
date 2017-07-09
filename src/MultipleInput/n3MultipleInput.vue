<template>
<div class="inline" >
  <div :class="classObj" :style="{width:width,height:height}" @click="focus">
    <template v-for="(item, index) in currentValue">
        <template v-if="index == currentPosition">
            <n3-typeahead
              ref="typeahead"
              :placeholder="placeholder"
              :async="async"
              @focus="_onFocus"
              @blur="_onBlur"
              :style="{margin:'0px 5px'}"
              v-model="currentQuery" 
              :width='inputWidth'
              :items="citems"
              @change="_onInputchange"
              :dropdown-width="dropdownWidth"
              :dropdown-height="dropdownHeight"
              :on-hit="add"
              :match-case="matchCase"
              :limit="limit"
              :itemRender="itemRender"
              :data="data"
              @keydown.delete.native="del" 
              @keydown.left.native="left" 
              @keydown.right.native="right" 
              @keydown.enter.native="add">
            </n3-typeahead>
        </template>
         <template v-else>
            <span :class="`${prefixCls}-multiple-input-space`"  @click="setIndex(index)"></span>
        </template>
        <span :class="`${prefixCls}-multiple-input-m-tag`" >
        <render class="inline" :context="context || $parent._self" :template="format(item, index)"></render>
        <n3-icon type="times" :class="`${prefixCls}-multiple-close`" @click.native="clickDel(index)"></n3-icon>
        </span>
    </template>

    <template v-if="currentValue && currentValue.length == currentPosition">
      <n3-typeahead
        ref="typeahead"
        :placeholder="placeholder"
        :async="async"
        @focus="_onFocus"
        @blur="_onBlur"
        :style="{margin:'0px 5px'}"
        v-model="currentQuery" 
        :width='inputWidth'
        :items="citems"
        @change="_onInputchange"
        :dropdown-width="dropdownWidth"
        :dropdown-height="dropdownHeight"
        :on-hit="add"
        :match-case="matchCase"
        :limit="limit"
        :itemRender="itemRender"
        :data="data"
        @keydown.delete.native="del" 
        @keydown.left.native="left" 
        @keydown.right.native="right" 
        @keydown.enter.native="add">
      </n3-typeahead>
    </template>
    <template v-else>
      <span :class="`${prefixCls}-multiple-input-space ${prefixCls}-multiple-input-long`"  @click="setIndex(currentValue.length)"></span>
    </template>
  </div>
   <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="value">
  </validate>
</div>
</template>

<script>
import type from '../utils/type'
import n3Typeahead from '../Typeahead/n3Typeahead'
import render from '../render'
import n3Icon from '../Icon/n3Icon'
import valMixin from '../Mixin/valMixin'
import validate from '../validate'

export default {
  name: 'n3MultipleInput',
  mixins: [valMixin],
  props: {
    value: {
      type: Array
    },
    async: {
      type: Boolean,
      default: false
    },
    format: {
      type: Function,
      default (item, index) {
        return item
      }
    },
    width: {
      type: String,
      default: '220px'
    },
    height: {
      type: String,
      default: ''
    },
    inputWidth: {
      type: String,
      default: '50px'
    },
    addFormat: {
      type: Function,
      default (item) {
        return item
      }
    },
    query: {
      type: String,
      default () {
        return ''
      }
    },
    context: {
    },
    placeholder: {
      type: String
    },
    positionMove: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array
    },
    itemRender: {
      type: Function,
      default (item) {
        return item
      }
    },
    limit: {
      type: Number,
      default: 8
    },
    matchCase: {
      type: Boolean,
      default: false
    },
    dropdownWidth: {
      type: String,
      default: '220px'
    },
    dropdownHeight: {
      type: String,
      default: '300px'
    },
    items: {
      type: Array
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      empty: true,
      stopSecond: false,
      currentValue: this.value,
      currentPosition: 0,
      currentQuery: this.query,
      citems: this.items
    }
  },
  watch: {
    items (val) {
      this.citems = val
    },
    currentQuery (val) {
      if (val !== '') {
        this.empty = false
      } else {
        this.citems = []
      }
    },
    currentPosition (val) {
      this.$emit('positionChange', val)
      this.focus()
    },
    currentValue (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      this.$emit('input', val)
      this.$emit('change', val)
      this.focus()
    },
    value (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      this.currentValue = val
    }
  },
  computed: {
    classObj () {
      let {prefixCls} = this
      let klass = {}

      klass[prefixCls + '-form-control'] = true
      klass[prefixCls + '-multiple-input'] = true

      return klass
    }
  },
  components: {
    n3Icon,
    n3Typeahead,
    validate,
    render
  },
  methods: {
    _onInputchange (query) {
      this.$emit('inputChange', query)
    },
    _onFocus () {
      this.$emit('focus')
    },
    _onBlur () {
      this.$emit('blur')
    },
    focus () {
      this.$nextTick(() => {
        let typeahead = type.isArray(this.$refs.typeahead) ? this.$refs.typeahead[0] : this.$refs.typeahead
        typeahead.focusInput()
      })
    },
    setIndex (index) {
      if (!this.positionMove) return
      if (this.currentQuery) {
        this.addquery()
      }
      this.currentPosition = index
    },
    addquery (item, that) {
      let content = that ? item : this.currentQuery
      let value = this.currentValue.slice(0)

      value.splice(this.currentPosition, 0, this.addFormat(content))
      this.currentValue = value
      this.currentQuery = ''
      this.empty = true
    },
    add (item, that) {
      if (this.stopSecond) return

      if (that && that.show) {
        this.stopSecond = true
        this.addquery(item, that)
        this.currentPosition++
        that.reset()
        setTimeout(() => { this.stopSecond = false })
      } else {
        if (this.currentQuery) {
          this.addquery()
          this.currentPosition++
        }
      }
    },
    clickDel (index) {
      let value = this.currentValue.slice(0)
      value.splice(index, 1)
      this.currentValue = value
    },
    del () {
      if (this.empty && this.currentPosition > 0) {
        let value = this.currentValue.slice(0)
        value.splice(this.currentPosition - 1, 1)
        this.currentValue = value
        this.currentPosition--
        this.focus()
      }
      this.empty = this.currentQuery === ''
    },
    left () {
      if (!this.positionMove) return
      if (this.currentPosition > 0 && this.currentQuery === '') {
        this.currentPosition--
      }
    },
    right () {
      if (!this.positionMove) return
      if (this.currentValue && this.currentPosition < this.value.length && this.currentQuery === '') {
        this.currentPosition++
      }
    }
  }
}
</script>
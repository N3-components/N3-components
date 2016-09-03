<template>
<div class="inline" >
  <div :class="classObj" :style="{width:width,height:height}" @click="focus">
    <template v-for="(index,item) in value" track-by="$index">
        <template v-if="index == position">
            <n3-typeahead
              :style="{margin:'0px 5px'}"
              :query.sync="query" 
              :width='inputWidth'
              :items="items"
              :on-change="onInputchange"
              :max-width="maxWidth"
              :max-height="maxHeight"
              :on-hit="add"
              :match-case="matchCase"
              :limit="limit"
              :render="render"
              :focused.sync="focused"
              :data="data"
              @keydown.delete="del" 
              @keydown.left="left" 
              @keydown.right="right" 
              @keydown.enter="add">
            </n3-typeahead>
        </template>
         <template v-else>
            <span class="{{prefixCls}}-multiple-input-space"  @click="setIndex(index)"></span>
        </template>
        <span class="{{prefixCls}}-multiple-input-m-tag" >
        {{{format.call(this._context,item,index)}}}
        <n3-icon type="times" class="{{prefixCls}}-multiple-close" @click="clickDel(index)"></n3-icon>
        </span>
    </template>

    <template v-if="value && value.length == position">
      <n3-typeahead
        :style="{margin:'0px 5px'}"
        :query.sync="query" 
        :width='inputWidth'
        :items="items"
        :on-change="onInputchange"
        :max-width="maxWidth"
        :max-height="maxHeight"
        :on-hit="add"
        :match-case="matchCase"
        :limit="limit"
        :render="render"
        :focused.sync="focused"
        :data="data"
        @keydown.delete="del" 
        @keydown.left="left" 
        @keydown.right="right" 
        @keydown.enter="add">
      </n3-typeahead>
    </template>
    <template v-else>
      <span class="{{prefixCls}}-multiple-input-space {{prefixCls}}-multiple-input-long"  @click="setIndex(value.length)"></span>
    </template>
  </div>
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
import type from 'get-type'
import n3Typeahead from './n3Typeahead'
import n3Icon from './n3Icon'
import valMixin from './valMixin'
import validate from './validate'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: Array,
      twoWay: true
    },
    position: {
      type: Number,
      twoWay: true,
      default: 0
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
    onChange: {
      type: Function
    },
    query: {
      type: String,
      twoway: true,
      default () {
        return ''
      }
    },
    data: {
      type: Array
    },
    render: {
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
    onHit: {
      type: Function
    },
    onEnter: {
      type: Function
    },
    maxWidth: {
      type: String,
      default: '100%'
    },
    maxHeight: {
      type: String,
      default: '300px'
    },
    onInputchange: {
      type: Function
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
      focused: false,
      empty: true,
      stopSecond: false
    }
  },
  ready () {
    this.$nextTick(function () {
      this._context.$compile(this.$el)
    })
  },
  watch: {
    query (val) {
      if (val !== '') {
        this.empty = false
      } else {
        this.items = []
      }
    },
    position () {
      this.focus()
    },
    value () {
      if (type.isFunction(this.onChange)) {
        this.onChange()
      }
      this.focus()
    }
  },
  computed: {
    classObj () {
      let {prefixCls, value} = this
      let klass = {}

      klass[prefixCls + '-form-control'] = true
      klass[prefixCls + '-multiple-input'] = true

      return klass
    }
  },
  components: {
    n3Icon,
    n3Typeahead,
    validate
  },
  methods: {
    focus () {
      let self = this
      self.focused = false
      setTimeout(() => {
        self.focused = true
      },100)
    },
    setIndex (index) {
      if (this.query) {
        this.addquery()
      }
      this.position = index
    },
    addquery (item, that) {
      let content = that ? item : this.query
      let value = this.value.slice(0)

      value.splice(this.position, 0, this.addFormat(content))
      this.value = value
      this.query = ''
      this.empty = true
    },
    add (item, that) {
      if (this.stopSecond) return

      if (that && that.show) {
        this.stopSecond = true
        this.addquery(item, that)
        this.position++
        that.reset()
        setTimeout(() => { this.stopSecond = false })
      } else {
        if (this.query) {
          this.addquery()
          this.position++
        }
      }
    },
    clickDel (index) {
      let value = this.value.slice(0)
      value.splice(index, 1)
      this.value = value
    },
    del () {
      if (this.empty && this.position > 0) {
        let value = this.value.slice(0)
        value.splice(this.position-1, 1)
        this.value = value
        this.position--
        this.focus()
      }
      this.empty = this.query === '' ? true : false
    },
    left () {
      if (this.position > 0 && this.query === '') {
        this.position--
      }
    },
    right () {
      if (this.value && this.position < this.value.length && this.query === '') {
        this.position++
      }
    }
  }
}
</script>
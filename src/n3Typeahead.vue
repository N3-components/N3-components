<template>
<div style="position: relative;display:inline-block"
     :class="[show ? prefixCls +'-open' : '']">
  <n3-input
    :width="width"
    :name="name" 
    :rules="rules" 
    :validate="validate" 
    :has-feedback="hasFeedback"
    :placeholder="placeholder"
    :custom-validate="customValidate"
    :readonly="readonly"
    :disabled="disabled"
    :value.sync="query"
    :focused.sync="focused"
    :on-blur="blur"
    @input="update"
    @keydown.esc="show=false"
    @keydown.up="up"
    @keydown.down="down"
    @keydown.enter= "hit(null)"
    @keydown.esc="reset"
  ></n3-input>
  <ul class="{{prefixCls}}-dropdown-menu" :style="{width: dropdownWidth, maxHeight: dropdownHeight}">
    <li v-for="item in items" :class="isActive($index)">
      <a @mousedown.prevent="hit($index)" >
        {{{render.call(this._context,item)}}}
      </a>
    </li> 
  </ul>
</div>

</template>

<script>
import n3Input from './n3Input'
import type from './utils/type'
import inputMixin from './inputMixin'

export default {
  created () {
    this.items = this.primitiveData
  },
  mixins: [inputMixin],
  props: {
    readonly: {
      type: Boolean
    },
    query: {
      type: String,
      twoway: true,
      default: ''
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
    addFormat: {
      type: Function,
      default (item) {
        return item
      }
    },
    onHit: {
      type: Function,
      default (item) {
        this.reset()
        this.query = this.addFormat(item)
      }
    },
    dropdownWidth: {
      type: String,
      default: '220px'
    },
    dropdownHeight: {
      type: String,
      default: '300px'
    },
    onChange: {
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
  watch: {
    items (val) {
      this.show = val && val.length ? true : false
    },
    query (val) {
      if (val.value === '') {
        this.items = []
      }
    }
  },
  data () {
    return {
      show: false,
      noResults: true,
      current: 0
    }
  },
  computed: {
    primitiveData () {
      if (this.data && this.query) {
        return this.data.filter((value) => {
          value = this.matchCase ? value : value.toLowerCase()
          return value.indexOf(this.query) !== -1
        }).slice(0, this.limit)
      }
    }
  },
  components: {
    n3Input
  },
  methods: {
    blur () {
      this.show = false
    },
    update () {
      if (this.readonly || this.disabled) return
      if (!this.query) {
        this.reset()
        return false
      }

      if (type.isFunction(this.onChange)) {
        this.onChange(this.query)
      } else if (this.data) {
        this.items = this.primitiveData
      }
    },
    reset () {
      this.items = []
      this.query = ''
      this.loading = false
      this.show = false
    },
    isActive (index) {
      let klass = this.prefixCls + '-dropdown-active'
      return this.current === index ? klass : ''
    },
    hit (index) {
      if (this.items && this.items.length) {
        index ? this.current = index : ''
        this.onHit(this.items[this.current], this)
      }
    },
    up () {
      if (this.current > 0) this.current--
    },
    down () {
      if (this.current < this.items.length - 1) this.current++
    }
  }
}
</script>

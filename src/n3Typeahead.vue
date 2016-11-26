<template>
<div style="position: relative;display:inline-block"
     :class="[show ? prefixCls +'-open' : '']">
  <n3-input
    :width="width"
    :name="name" 
    :rules="rules" 
    :has-feedback="hasFeedback"
    :placeholder="placeholder"
    :custom-validate="customValidate"
    :readonly="readonly"
    :disabled="disabled"
    v-model="query"
    :on-focus="onFocus"
    :on-blur="blur"
    @input.native="update"
    @keydown.native.up="up"
    @keydown.native.down="down"
    @keydown.native.enter= "hit(null)"
    @keydown.native.esc="reset"
  ></n3-input>
  <ul :class="`${prefixCls}-dropdown-menu`" :style="{width: dropdownWidth, maxHeight: dropdownHeight}">
    <li v-for="(item,index) in citems" :class="isActive(index)">
      <a @mousedown.prevent="hit(index)" >
        <span v-html="render.call(this._context,item)"></span>
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
    this.citems = this.primitiveData
  },
  mixins: [inputMixin],
  props: {
    readonly: {
      type: Boolean
    },
    value: {
      type: String,
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
      this.citems = val
    },
    citems (val) {
      this.show = val && !!val.length
    },
    query (val) {
      this.$emit('input', val)
      if (val.value === '') {
        this.items = []
      }
    }
  },
  data () {
    return {
      show: false,
      noResults: true,
      current: 0,
      query: this.value,
      citems: this.items
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
      if (type.isFunction(this.onBlur)) {
        this.onBlur()
      }
    },
    update () {
      let self = this
      if (this.readonly || this.disabled) return
      setTimeout(() => {
        if (!self.query) {
          self.reset()
          return false
        }

        if (type.isFunction(self.onChange)) {
          self.onChange(self.query)
        } else if (self.data) {
          console.log(self.primitiveData)
          self.citems = self.primitiveData
        }
      }, 100)
    },
    reset () {
      this.citems = []
      this.query = ''
      this.loading = false
      this.show = false
    },
    isActive (index) {
      let klass = this.prefixCls + '-dropdown-active'
      return this.current === index ? klass : ''
    },
    hit (index) {
      if (this.citems && this.citems.length) {
        index ? this.current = index : ''
        this.onHit(this.citems[this.current], this)
      }
    },
    up () {
      if (this.current > 0) this.current--
    },
    down () {
      if (this.current < this.citems.length - 1) this.current++
    }
  }
}
</script>

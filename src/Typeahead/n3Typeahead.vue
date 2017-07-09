<template>
<div style="position: relative;display:inline-block"
     :class="[show ? prefixCls +'-open' : '']">
  <n3-input
    ref="input"
    :width="width"
    :name="name" 
    :rules="rules" 
    :placeholder="placeholder"
    :custom-validate="customValidate"
    :readonly="readonly"
    :disabled="disabled"
    v-model="query"
    :show-clean="showClean"
    @focus="_onFocus"
    @blur="_onBlur"
    @input.native="update"
    @keydown.native.up="up"
    @keydown.native.down="down"
    @keydown.native.enter= "hit(null)"
    @keydown.native.esc="reset"
  ></n3-input>
  <ul :class="`${prefixCls}-dropdown-menu`" :style="{width: dropdownWidth, maxHeight: dropdownHeight}">
    <li v-for="(item,index) in citems" :class="isActive(index)" >
      <a @mousedown.prevent="hit(index)" >
        <n3-render :context="context || $parent._self" :template="itemRender(item)">
        </n3-render>
      </a>
    </li> 
  </ul>
</div>
</template>

<script>
import n3Input from '../Input/n3Input'
import n3Render from '../render'
import inputMixin from '../Mixin/inputMixin'

export default {
  name: 'n3Typeahead',
  created () {
    this.citems = this.primitiveData
  },
  mixins: [inputMixin],
  props: {
    value: {
      type: String,
      default: ''
    },
    data: {
      type: Array
    },
    context: {
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
    showClean: {
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
    async: {
      type: Boolean
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
    value (val) {
      this.query = val
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
    n3Input,
    n3Render
  },
  methods: {
    focusInput () {
      this.$refs.input.focus()
    },
    _onFocus () {
      this.$emit('focus')
    },
    _onBlur () {
      this.show = false
      this.$emit('blur')
    },
    update () {
      let self = this
      if (this.readonly || this.disabled) return
      setTimeout(() => {
        if (!self.query) {
          self.reset()
          return false
        }

        if (self.async) {
          self.$emit('change', self.query)
        } else if (self.data) {
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

<template>
  <n3-button 
    @click.prevent="handleClick"
    :class="classObj" 
    :disabled="disabled"
    :type="checked ? 'primary' : 'default'">
    <slot></slot>
  </n3-button>
</template>

<script>
import n3Button from './n3Button'
import type from './utils/type'

export default {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false,
      twoway: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  events: {
    'n3@radiogroupChange' (val) {
      this.checked = val === this.value
    }
  },
  computed: {
    classObj () {
      let {prefixCls} = this
      let klass = {}
      klass[prefixCls + '-radio-btn'] = true

      return klass
    }
  },
  methods: {
    handleClick () {
      if (this.checked) return
      this.checked = true
      this.$dispatch('n3@radioChange', this.value)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.value)
      }
    }
  },
  components: {
    n3Button
  }
}
</script>
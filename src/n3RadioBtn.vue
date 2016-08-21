<template>
  <n3-button 
    @click.prevent="handleClick"
    :class="classObj" 
    :disabled="disabled"
    :active="active"
    :type="type">
    <slot></slot>
  </n3-button>
</template>

<script>
import n3Button from './n3Button'

export default {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
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
  computed: {
    type () {
      return this.$parent.type
    },
    active () {
      return this.$parent.value === this.value
    },
    classObj () {
      let {prefixCls, active} = this
      let klass = {}
      klass[prefixCls + '-radio-btn'] = true

      return klass
    }
  },
  methods: {
    handleClick () {
      this.$parent.value = this.value
      if (typeof this.onChange === 'function') {
        this.onChange(this.value)
      }
    }
  },
  components: {
    n3Button
  },
  created () {
    if (this.checked) this.$parent.value = this.value
  }
}
</script>
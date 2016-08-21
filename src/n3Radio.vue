<template>
<label class="{{prefixCls}}-radio-con">
  <span :class="wrapClasses">
    <span class="{{prefixCls}}-radio-inner"></span> 
    <input 
    type="radio" 
    :disabled="disabled"
    :checked="!!checked"
    class="{{prefixCls}}-radio-input" 
    @click.prevent="handleClick" >
  </span>
  <span><slot></slot></span>
</label>
</template>

<script>
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
    wrapClasses () {
      let klass = {}
      let {prefixCls, active, disabled} = this

      klass[prefixCls + '-radio-span'] = true
      klass[prefixCls + '-radio-checked'] = active
      klass[prefixCls + '-radio-disabled'] = disabled

      return klass
    },
    active () {
      return this.$parent.value === this.value
    }
  },
  methods: {
    handleClick () {
      this.$parent.value = this.value
      if (typeof this.onChange === 'function') {
        this.onChange(this.checked)
      }
    }
  },
  created () {
    if (this.checked) this.$parent.value = this.value
  }
}
</script>
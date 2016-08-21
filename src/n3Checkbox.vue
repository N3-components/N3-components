<template>
  <label :class="wrapClass">
  <span>
    <span class="{{prefixCls}}-checkbox-inner"></span>
    <input
      type="checkbox"
      class="{{prefixCls}}-checkbox-input"
      :disabled="disabled"
      :checked="!!checked"
      @click="handleClick"/>
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
    wrapClass () {
      let klass = {}
      let {prefixCls, active, disabled} = this

      klass[prefixCls + '-checkbox-label'] = true
      klass[prefixCls + '-checkbox-checked'] = active
      klass[prefixCls + '-checkbox-disabled'] = disabled

      return klass
    },
    active () {
      let parent = this.$parent
      let index = parent.value.indexOf(this.value)
      return index > -1
    }
  },
  methods: {
    handleClick () {
      let parent = this.$parent
      let index = parent.value.indexOf(this.value)
      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)
      this.checked = !this.checked
      if (typeof this.onChange === 'function') {
        this.onChange(this.checked)
      }
    }
  },
  created () {
    let parent = this.$parent
    let index = parent.value.indexOf(this.value)
    if (this.checked && index === -1) this.$parent.value.push(this.value)
  }
}
</script>
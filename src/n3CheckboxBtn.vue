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
    color () {
      return this.$parent.color
    },
    active () {
      let parent = this.$parent
      let index = parent.value.indexOf(this.value)
      return index > -1
    },
    classObj () {
      let {prefixCls, active} = this
      let klass = {}
      klass[prefixCls + '-checked-btn'] = true

      return klass
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
  },
  components: {
    n3Button
  }
}
</script>

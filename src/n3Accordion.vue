<template>
  <div :class="`${prefixCls}-panel-group`">
      <slot></slot>
  </div>
</template>

<script>
import type from './utils/type'

export default {
  name: 'n3Accordion',
  props: {
    oneAtTime: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    effect: {
      type: String,
      default: 'collapse'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  methods: {
    change (child) {
      let children = this.$children
      let ret = []
      if (this.oneAtTime) {
        children.forEach((item) => {
          if (child !== item) {
            item.open = false
          }
        })
      }

      children.forEach((item) => {
        if (item.index) {
          ret.push({
            index: item.index,
            isOpen: item.open,
            header: item.header
          })
        }
      })
      if (type.isFunction(this.onChange)) {
        this.onChange(ret)
      }
    }
  }
}
</script>
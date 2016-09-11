<template>
  <div class="{{prefixCls}}-panel-group">
    <slot></slot>
  </div>
</template>

<script>
import type from './utils/type'

export default {
  props: {
    oneAtATime: {
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
  events: {
    'n3@paneltoggle' (child) {
      let children = this.$children
      let ret = []

      if (this.oneAtATime) {
        children.forEach((item) => {
          if (child !== item) {
            item.isOpen = false
          }
        })
      }

      children.forEach((item) => {
        if (item.index) {
          ret.push({
            index: item.index,
            isOpen: item.isOpen,
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
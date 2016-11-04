<template>
  <div :class="`${prefixCls}-carousel-item`">
    <slot></slot>
  </div>
</template>

<script>
import element from './utils/element'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      index: 0
    }
  },
  ready () {
    for (let c in this.$parent.$children) {
      if (this.$parent.$children[c].$el == this.$el) {
        this.index = c
        break
      }
    }
    this.$parent.indicator.push(this.index)
    if (this.index == 0) {
      element.addClass(this.$el, this.prefixCls + '-carousel-active')
    }
  }
}
</script>

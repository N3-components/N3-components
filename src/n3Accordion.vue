<template>
  <div :class="`${prefixCls}-panel-group`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'n3Accordion',
  props: {
    oneAtTime: {
      type: Boolean,
      default: false
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
      this.$emit('change', ret)
    }
  }
}
</script>
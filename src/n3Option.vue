<template>
  <div :value="value" :class="`${prefixCls}-option`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'n3Option',
  props: {
    value: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>
<template>
  <div :class="`${prefixCls}-progress`">
    <slot></slot>
  </div>
</template>
<script>
export default {
	name: 'n3Progress',
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>
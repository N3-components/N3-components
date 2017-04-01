<template>
  <div :class="`${prefixCls}-btn-group`">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: 'n3ButtonGroup',
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>

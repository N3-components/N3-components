<template>
  <div :class="`${prefixCls}-btn-group`">
    <slot></slot>  
  </div>
</template>

<script>
export default{
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>

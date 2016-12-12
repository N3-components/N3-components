<template>
  <i :class="[prefixCls + '-fa',prefixCls +'-fa-'+type]" :style="{fontSize:size,color:color}">
    <slot></slot>
  </i>
</template>
<script>
export default{
  name: 'n3Icon',
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>
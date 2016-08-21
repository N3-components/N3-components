<template>
  <div :class="classObj" >
  	<slot></slot>		
  </div>
</template>
<script>
export default{
  props: {
    col: {
      type: Number
    },
    mode: {
      type: String,
      default: 'md'
    },
    offset: {
      type: Number
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    classObj () {
      let {prefixCls, mode, offset, col} = this
      let klass = {}

      klass[prefixCls + '-col-' + mode + '-' + col] = true
      offset ? klass[prefixCls + '-col-offset-' + offset] = true : ''

      return klass
    }
  }
}
</script>
<template>
  <div :class="classObj" >
  	<slot></slot>		
  </div>
</template>
<script>
export default{
  name: 'n3Column',
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
      offset ? klass[prefixCls + '-col-' + mode + '-offset-' + offset] = true : ''

      return klass
    }
  }
}
</script>

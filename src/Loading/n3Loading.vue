<template>
  <span :class="classObj">
    <i :class="iclassObj"></i>
    <slot></slot>  
  </span>
</template>
<script>
export default{
  name: 'n3Loading',
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    },
    center: {
      type: Boolean
    },
    fixed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    classObj () {
      let {prefixCls, center, fixed} = this
      let klass = {}

      klass['affix'] = fixed
      klass[prefixCls + '-page-loading-con'] = true
      klass[prefixCls + '-page-loading-con'] = true
      klass[prefixCls + '-loading-center'] = center

      return klass
    },
    iclassObj () {
      let {prefixCls, type, size, color} = this
      let klass = {}

      klass[prefixCls + '-page-loading'] = true
      type ? klass[prefixCls + '-loading-' + type] = true : ''
      size ? klass[prefixCls + '-loading-' + size] = true : ''
      color ? klass['text-' + color] = true : ''

      return klass
    }
  }
}
</script>
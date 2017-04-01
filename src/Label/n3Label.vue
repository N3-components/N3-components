<template>
	<span :class="classObj">
		<slot></slot>
	</span>
</template>

<script>
export default{
  name: 'n3Label',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classObj () {
      let {prefixCls, type, hover} = this
      let klass = {}

      klass[prefixCls + '-label'] = true
      klass[prefixCls + '-label-' + type] = true
      klass[prefixCls + '-label-hover'] = hover

      return klass
    }
  }
}
</script>
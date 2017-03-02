<template>
	<div :class="classObj">
		<slot></slot>
	</div>
</template>

<script>
export default{
  name: 'n3Card',
  props: {
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
      let {prefixCls, hover} = this
      let klass = {}

      klass[prefixCls + '-card'] = true
      klass[prefixCls + '-card-hover'] = hover

      return klass
    }
  }
}
</script>
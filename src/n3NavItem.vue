<template>
	<li :class="classObj">
		<slot></slot>
	</li>
</template>
<script>
export default{
  props: {
    active: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    classObj () {
      let {prefixCls, active, disabled} = this
      let klass = {}

      klass[prefixCls + '-navbar-active'] = active
      klass[prefixCls + '-navbar-disabled'] = disabled

      return klass
    }
  }
}
</script>
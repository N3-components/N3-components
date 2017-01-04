<template>
  <span :class="`${prefixCls}-badge`">
		<slot></slot>	
	</span>
</template>
<script>
	export default {
		name: 'n3Badge',
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	}
</script>
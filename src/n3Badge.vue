<template>
	<span class="{{prefixCls}}-badge">
		<slot></slot>	
	</span>
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
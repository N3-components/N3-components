<template>
	<ol class="{{prefixCls}}-breadcrumb">
		<slot></slot>
	</ol>
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
<template>
	<div class="{{prefixCls}}-progress">
		<slot></slot>	
	</div>
</template>
<script>
	export default {
		props: {
			prefixCls: {
				type: String,
	      default: 'n3'
	    }
		}
	}
</script>
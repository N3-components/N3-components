<template>
 	<li :class="[active ? prefixCls + '-breadcrumb-active' : '']">
		<a v-if='href' :href="href" >
    	<slot></slot>
  	</a>
  	<span v-else>
    	<slot></slot>
  	</span>
  	</li>
</template>
<script>
export default {
  props: {
    href: {
      type: String
    },
    active: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>
<template>
	<nav :class="`${prefixCls}-collapse ${prefixCls}-navbar-collapse ${prefixCls}-navbar-${theme} ${prefixCls}-navbar-${type} clearfix`">
		<ul :class="`${prefixCls}-nav ${prefixCls}-navbar-nav`">
			<slot></slot>	
		</ul>
	</nav>
</template>
<script>
export default{
  name: 'n3Nav',
  props: {
    type: {
      type: String,
      default: 'horizontal'
    },
    theme: {
      type: String,
      default: 'default'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  }
}
</script>
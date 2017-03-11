<template>
	<nav :class="classArray">
		<ul :class="ulClassArray">
			<slot></slot>	
		</ul>
	</nav>
</template>

<script>
export default {
  name: 'n3Nav',
  computed: {
    classArray () {
      let klass = []
      klass.push(this.prefixCls + '-collapse')
      klass.push(this.prefixCls + '-navbar-collapse')
      klass.push(this.prefixCls + '--navbar-' + this.theme)
      klass.push(this.prefixCls + '-navbar-' + this.type)
      klass.push('clearfix')
      return klass
    },
    ulClassArray () {
      let klass = []
      klass.push(this.prefixCls + '-nav')
      klass.push(this.prefixCls + '-navbar-nav')
      return klass
    }
  },
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

<template>
  <div :class="classObj" >
  	<slot></slot>		
  </div>
</template>
<script>
export default{
  name: 'n3Container',
  props: {
    fluid: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    classObj () {
      let {prefixCls, fluid} = this
      let klass = {}

      klass[prefixCls + '-container-fluid'] = fluid
      klass[prefixCls + '-container'] = !fluid
      klass['clearfix'] = true

      return klass
    }
  }
}
</script>
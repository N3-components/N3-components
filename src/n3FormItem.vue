<template>
	<div :class="classObj" >
		<label class="{{prefixCls}}-col-sm-{{labelCol}} {{prefixCls}}-control-label">
      <em class="{{prefixCls}}-form-need" v-if="need" >*</em>
      {{label}}
      </label>
		<div class="{{prefixCls}}-col-sm-{{col}}">
			<slot></slot>
		</div>	
	</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    labelCol: {
      type: Number,
      default: 2
    },
    wrapCol: {
      type: Number
    },
    need: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    col () {
      return 12 - this.labelCol
    },
    classObj () {
      let {prefixCls, wrapCol} = this
      let klass = {}

      klass['clearfix'] = true
      klass[prefixCls + '-form-group'] = true
      wrapCol ? klass[prefixCls + '-col-sm-' + wrapCol] = true : ''

      return klass
    }
  }
}
</script>
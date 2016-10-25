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
      type: Number,
      default: 12
    },
    formCol: {
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
      if (this.formCol) {
        return this.formCol
      }
      return this.wrapCol - this.labelCol
    },
    classObj () {
      let {prefixCls, wrapCol} = this
      let klass = {}
      wrapCol = wrapCol ? wrapCol : 12

      klass['clearfix'] = true
      klass[prefixCls + '-form-group'] = true
      klass[prefixCls + '-col-sm-' + wrapCol] = true 

      return klass
    }
  }
}
</script>
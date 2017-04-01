<template>
  <div :class="classObj" >
    <label :class="`${prefixCls}-col-sm-${label_col} ${prefixCls}-control-label`">
      <em :class="`${prefixCls}-form-need`" v-if="need" >*</em>
      {{label}}
      </label>
    <div :class="`${prefixCls}-col-sm-${col} inline`">
      <slot></slot>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'n3FormItem',
  props: {
    label: {
      type: String
    },
    labelCol: {
      type: Number
    },
    wrapCol: {
      type: Number
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
    inline () {
      return this.$parent.type === 'inline'
    },
    label_col () {
      let defaultCol = this.inline ? 0 : 2
      return this.labelCol ? this.labelCol : defaultCol
    },
    col () {
      if (this.inline && !this.formCol) {
        return 0
      }

      if (this.formCol) {
        return this.formCol
      }

      let wrapCol = this.wrapCol ? this.wrapCol : 12
      return wrapCol - this.label_col
    },
    classObj () {
      let {prefixCls, wrapCol} = this
      let klass = {}
      let defaultCol = this.inline ? (wrapCol || 0) : 12

      klass['clearfix'] = true
      klass[prefixCls + '-form-group'] = true
      klass[prefixCls + '-col-sm-' + defaultCol] = true

      return klass
    }
  }
}
</script>
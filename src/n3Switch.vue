<template>
<div class="inline">
  <div  :class="classObj" @click="toggle">
    <div class="{{prefixCls}}-switch-container {{prefixCls}}-switch-on-primary {{prefixCls}}-switch-off-default">
      <span class="{{prefixCls}}-switch-handle-on {{prefixCls}}-switch-primary" >{{ontext}}</span>
      <span class="{{prefixCls}}-switch-label" >&nbsp;</span>
      <span class="{{prefixCls}}-switch-handle-off {{prefixCls}}-switch-default" >{{offtext}}</span>
    </div>
  </div>
  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :value="value"
    :results.sync="validateResults">
  </validate>
<div>
</template>

<script>
import type from 'get-type'
import valMixin from './valMixin'
import validate from './validate'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: Boolean,
      twoway: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ontext: {
      type: String,
      default: 'ON'
    },
    offtext: {
      type: String,
      default: 'OFF'
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    validate
  },
  computed: {
    classObj () {
      let {prefixCls, value, disabled} = this
      let klass = {}

      klass[prefixCls + '-switch'] = true
      klass[prefixCls + '-switch-wrapper'] = true
      klass[prefixCls + '-switch-on'] = value
      klass[prefixCls + '-switch-off'] = !value
      klass[prefixCls + '-switch-id-switch-check-on'] = value && disabled
      klass[prefixCls + '-switch-id-switch-check-off'] = !(value && disabled)
      klass[prefixCls + '-switch-animate'] = true
      klass[prefixCls + '-switch-id-switch-check-disabled'] = disabled

      return klass
    }
  },
  methods: {
    toggle () {
      if (this.disabled) return
      this.value = !this.value
      if (type.isFunction(this.onChange)) {
        this.onChange()
      }
    }
  }
}
</script>
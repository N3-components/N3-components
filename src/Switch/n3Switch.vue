<template>
<div class="inline">
  <input 
    v-show="false"
    type="checkbox"
    v-model="currentValue"/>   
  <div  :class="classObj" @click="toggle">
    <div :class="`${prefixCls}-switch-container ${prefixCls}-switch-on-primary ${prefixCls}-switch-off-default`">
      <span :class="`${prefixCls}-switch-handle-on ${prefixCls}-switch-primary`" >{{ontext}}</span>
      <span :class="`${prefixCls}-switch-label`" >&nbsp;</span>
      <span :class="`${prefixCls}-switch-handle-off ${prefixCls}-switch-default`" >{{offtext}}</span>
    </div>
  </div>
  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="value">
  </validate>
</div>
</template>

<script>
import valMixin from '../Mixin/valMixin'
import validate from '../validate'

export default {
  name: 'n3Switch',
  mixins: [valMixin],
  props: {
    value: {
      type: Boolean
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
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    validate
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    classObj () {
      let {prefixCls, value, disabled} = this
      let klass = {}

      klass[prefixCls + '-switch'] = true
      klass[prefixCls + '-switch-wrapper'] = true
      klass[prefixCls + '-switch-on'] = value
      klass[prefixCls + '-switch-off'] = !value
      klass[prefixCls + '-switch-animate'] = true
      klass[prefixCls + '-switch-disabled'] = disabled

      return klass
    }
  },
  methods: {
    toggle () {
      if (this.disabled) return
      this.currentValue = !this.currentValue
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    }
  }
}
</script>
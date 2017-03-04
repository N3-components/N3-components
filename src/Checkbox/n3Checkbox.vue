<template>
  <label :class="wrapClass">
  <span>
    <span class="{{prefixCls}}-checkbox-inner">
      <n3-icon type="check" color="#fff" class="{{prefixCls}}-checkbox-inner-check"></n3-icon>
    </span>
    <input
      type="checkbox"
      class="{{prefixCls}}-checkbox-input"
      :disabled="disabled"
      :checked="checked"
      @click="handleClick"/>
  </span>
  <span><slot></slot></span>  
  <validate
    :name="name"
    :rules="rules"
    :valid-status.sync="validStatus"
    :custom-validate="customValidate" 
    :value="checked"
    :results.sync="validateResults">
  </validate>
  </label>
</template>

<script>
import type from '../utils/type'
import n3Icon from '../Icon/n3Icon'
import valMixin from '../mixin/valMixin'
import validate from '../validate'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false,
      twoway: true
    },
    disabled: {
      type: Boolean,
      default: false
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
    validate,
    n3Icon
  },
  events: {
    'n3@checkboxgroupChange' (val) {
      this.checked = val.indexOf(this.value) > -1
    }
  },
  computed: {
    wrapClass () {
      let klass = {}
      let {prefixCls, checked, disabled} = this

      klass[prefixCls + '-checkbox-label'] = true
      klass[prefixCls + '-checkbox-checked'] = checked
      klass[prefixCls + '-checkbox-disabled'] = disabled

      return klass
    }
  },
  methods: {
    handleClick () {
      this.checked = !this.checked
      this.$dispatch('n3@checkboxChange', this)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.checked)
      }
    }
  }
}
</script>
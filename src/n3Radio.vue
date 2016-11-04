<template>
<label :class="`${prefixCls}-radio-con`">
  <span :class="wrapClasses">
    <span :class="`${prefixCls}-radio-inner`"></span> 
    <input 
    type="radio" 
    :disabled="disabled"
    :checked="checked"
    :class="`${prefixCls}-radio-input`" 
    @click.prevent="handleClick" >
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
import type from './utils/type'
import valMixin from './valMixin'
import validate from './validate'

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
    validate
  },
  events: {
    'n3@radiogroupChange' (val) {
      this.checked = val === this.value
    }
  },
  computed: {
    wrapClasses () {
      let klass = {}
      let {prefixCls, checked, disabled} = this

      klass[prefixCls + '-radio-span'] = true
      klass[prefixCls + '-radio-checked'] = checked
      klass[prefixCls + '-radio-disabled'] = disabled

      return klass
    }
  },
  methods: {
    handleClick () {
      if (this.checked) return
      this.checked = true
      this.$dispatch('n3@radioChange', this.value)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.checked)
      }
    }
  }
}
</script>
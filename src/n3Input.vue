<template>
<div :class="classObj"  :style="{'width':width}">
  <input
    autoComplete="off"
    :class="`${prefixCls}-form-control`"
    :style="{'width':width}"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
		:type="type"
    @blur="blur"
    @focus="focus"
    v-focus-model="focused"
    v-model="value"  />
  <n3-icon
    type="check" :class="`${prefixCls}-form-control-feedback`"
    v-if='validStatus=="success" && hasFeedback'>
  </n3-icon>

  <n3-icon
    type="warning" :class="`${prefixCls}-form-control-feedback`"
    v-if='validStatus=="warning" && hasFeedback'>
  </n3-icon>

  <n3-icon
    type="times" :class="`${prefixCls}-form-control-feedback`"
    v-if='validStatus=="error" && hasFeedback'>
  </n3-icon>

  <validate
    :name="name"
    :valid-status.sync="validStatus"
    :rules="rules"
    :custom-validate="customValidate"
    :value="value"
    :results.sync="validateResults">
  </validate>

</div>
</template>
<script>
import type from './utils/type'
import n3Icon from './n3Icon'
import inputMixin from './inputMixin'
import validate from './validate'
import { focusModel } from 'vue-focus'

export default {
  mixins: [inputMixin],
  props: {
    readonly: {
      type: Boolean
    },
    value: {
      type: [String, Number],
      twoway: true
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  components: {
    n3Icon,
    validate
  },
  directives: {
    focusModel: focusModel
  },
  data () {
    return {
      validateResults: {}
    }
  },
  watch: {
    value (val) {
      if (type.isFunction(this.onChange)) {
        this.onChange(val)
      }
    }
  },
  computed: {
    classObj () {
      let {prefixCls, validStatus, hasFeedback} = this
      let klass = {}

      klass[prefixCls + '-has-error'] = validStatus === 'error'
      klass[prefixCls + '-has-success'] = validStatus === 'success'
      klass[prefixCls + '-has-warn'] = validStatus === 'warn'
      klass[prefixCls + '-has-feedback'] = validStatus && hasFeedback
      klass[prefixCls + '-input-con'] = true
      klass['inline'] = true

      return klass
    }
  },

  methods: {
    blur () {
      if (type.isFunction(this.onBlur)) {
        this.onBlur(this.value)
      }
    },
    focus () {
      if (type.isFunction(this.onFocus)) {
        this.onFocus(this.value)
      }
    }
  }
}
</script>

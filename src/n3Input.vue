<template>
<div :class="classObj" >
  <input  
   :style="{'width':width}"
   :readonly="readonly"
   :disabled="disabled"
   class="{{prefixCls}}-form-control"  
   placeholder="{{placeholder}}" 
   @blur="blur"
   @focus="focus"
   v-focus-model="focused" 
   v-model="value"  />
  <n3-icon 
    type="check" class="{{prefixCls}}-form-control-feedback" 
    v-if='validStatus=="success" && hasFeedback'>
  </n3-icon>

  <n3-icon 
    type="warning" class="{{prefixCls}}-form-control-feedback" 
    v-if='validStatus=="warning" && hasFeedback'>
  </n3-icon>

  <n3-icon 
    type="times" class="{{prefixCls}}-form-control-feedback" 
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
import type from 'get-type'
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
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    value: {
      type: [String, Number],
      twoway: true
    },
    prefixCls: {
      type: String,
      default: 'n3'
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
      focused: false,
      validateResults: {},
      validStatus: ''
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

  events: {
    'n3Input@focus' () {
      this.focused = true
    }
  },

  methods: {
    blur () {
      if (type.isFunction(this.onBlur)) {
        this.onBlur()
      }
    },
    focus () {
      if (type.isFunction(this.onFocus)) {
        this.onFocus()
      }
    }
  }
}
</script>
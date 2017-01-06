<template>
<div :class="classObj"  :style="{'width':width}">
  <input
    ref="input"
    autoComplete="off"
    :class="`${prefixCls}-form-control`"
    :style="{'width':width}"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
		:type="type"
    @blur="blur"
    @focus="focus"
    @input="update($event.target.value)"
    v-focus="focused" 
    :value="value" />

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
    v-model="validStatus"
    :rules="rules"
    :custom-validate="customValidate"
    :current="value">
  </validate>

</div>
</template>
<script>
import n3Icon from './n3Icon'
import inputMixin from './inputMixin'
import validate from './validate'
import { focus } from 'vue-focus'

export default {
  name: 'n3Input',
  mixins: [inputMixin],
  props: {
    value: {
      type: [String, Number]
    },
    readonly: {
      type: Boolean
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
    focus: focus
  },
  data () {
    return {
      focused: false
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
    update (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
    blur () {
      this.focused = false
      this.$emit('blur', this.value)
    },
    focus () {
      this.focused = true
      this.$emit('focus', this.value)
    }
  }
}
</script>

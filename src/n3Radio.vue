<template>
<label :class="`${prefixCls}-radio-con`">
  <span :class="wrapClasses">
    <span :class="`${prefixCls}-radio-inner`"></span> 
    <input 
    type="radio" 
    :disabled="disabled"
    :checked="currentChecked"
    :class="`${prefixCls}-radio-input`" 
    @click.prevent="handleClick" >
  </span>
  <span><slot></slot></span>
  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="checked">
  </validate>
</label>
</template>

<script>
import type from './utils/type'
import valMixin from './valMixin'
import events from './utils/events'
import validate from './validate'

export default {
  name: 'n3Radio',
  mixins: [valMixin, events],
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false,
      twoway: true
    },
    label: {
      type: [String, Number]
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
  data () {
    let checked = this.checked
    if (checked !== undefined) {
      this.$emit('input', checked)
    } else {
      checked = !!this.value
    }

    return {
      currentChecked: checked
    }
  },
  computed: {
    wrapClasses () {
      let klass = {}
      let {prefixCls, currentChecked, disabled} = this

      klass[prefixCls + '-radio-span'] = true
      klass[prefixCls + '-radio-checked'] = currentChecked
      klass[prefixCls + '-radio-disabled'] = disabled

      return klass
    }
  },
  watch: {
    value (val) {
      this.currentChecked = val
    },
    checked (val) {
      this.currentChecked = val
    },
    currentChecked (val) {
      this.$emit('input', val)
    }
  },
  created () {
    this.$on('n3@radiogroupChange', (val) => {
      this.currentChecked = val === this.label
    })
  },
  methods: {
    handleClick () {
      if (this.currentChecked) return
      this.currentChecked = true
      this.dispatch('n3RadioGroup', 'n3@radioChange', this.label)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.currentChecked)
      }
    }
  }
}
</script>
<template>
  <label :class="wrapClass">
  <span>
    <span :class="`${prefixCls}-checkbox-inner`">
      <n3-icon type="check" color="#fff" :class="`${prefixCls}-checkbox-inner-check`"></n3-icon>
    </span>
    <input
      type="checkbox"
      :class="`${prefixCls}-checkbox-input`"
      :disabled="disabled"
      :checked="currentChecked"
      @click="handleClick"/>
  </span>
  <span><slot></slot></span>  
  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="currentChecked">
  </validate>
  </label>
</template>

<script>
import n3Icon from '../Icon/n3Icon'
import events from '../utils/events'
import valMixin from '../Mixin/valMixin'
import validate from '../validate'

export default {
  name: 'n3Checkbox',
  mixins: [valMixin, events],
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
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
  computed: {
    wrapClass () {
      let klass = {}
      let {prefixCls, currentChecked, disabled} = this

      klass[prefixCls + '-checkbox-label'] = true
      klass[prefixCls + '-checkbox-checked'] = currentChecked
      klass[prefixCls + '-checkbox-disabled'] = disabled

      return klass
    }
  },
  created () {
    this.$on('n3@checkboxgroupChange', (val) => {
      this.currentChecked = val.indexOf(this.label) > -1
    })
  },
  methods: {
    handleClick () {
      this.currentChecked = !this.currentChecked
      this.dispatch('n3CheckboxGroup', 'n3@checkboxChange', this)
      this.$emit('change', this.currentChecked)
    }
  }
}
</script>
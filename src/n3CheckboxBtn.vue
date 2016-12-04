<template>
  <n3-button 
    @click.prevent.native="handleClick"
    :class="classObj" 
    :disabled="disabled"
    :type="currentChecked ? 'primary' : 'default'">
    <slot></slot>
  </n3-button>
<!--   <validate
    :name="name"
    :rules="rules"
    :valid-status.sync="validStatus"
    :custom-validate="customValidate" 
    :value="currentChecked"
    :results.sync="validateResults">
  </validate> -->
</template>

<script>
import n3Button from './n3Button'
import events from './utils/events'
import valMixin from './valMixin'
import validate from './validate'
import type from './utils/type'

export default {
  name: 'n3CheckboxBtn',
  mixins: [valMixin, events],
  props: {
    value: {
      type: String
    },
    label: {
      type: [String, Number]
    },
    checked: {
      type: Boolean,
      default: false
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
  computed: {
    classObj () {
      let {prefixCls} = this
      let klass = {}
      klass[prefixCls + '-checked-btn'] = true

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
  methods: {
    handleClick () {
      this.currentChecked = !this.currentChecked
      this.dispatch('n3CheckboxGroup', 'n3@checkboxChange', this)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.currentChecked)
      }
    }
  },
  created () {
    this.$on('n3@checkboxgroupChange', (val) => {
      this.currentChecked = val.indexOf(this.label) > -1
    })
  },
  components: {
    n3Button,
    validate
  }
}
</script>

<template>
  <n3-button 
    @click.prevent.native="handleClick"
    :class="classObj" 
    :disabled="disabled"
    :type="currentChecked ? 'primary' : 'default'">
    <slot></slot>
  </n3-button>
</template>

<script>
import n3Button from './n3Button'
import events from './utils/events'
import valMixin from './valMixin'
import type from './utils/type'

export default {
  name: 'n3RadioBtn',
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
  computed: {
    classObj () {
      let {prefixCls} = this
      let klass = {}
      klass[prefixCls + '-radio-btn'] = true

      return klass
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
  },
  components: {
    n3Button
  }
}
</script>
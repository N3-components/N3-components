<template>
<div :class="`${prefixCls}-btn-group ${prefixCls}-radio-group`">
    <slot></slot>

    <!-- <validate
      :name="name"
      :rules="rules"
      :valid-status.sync="validStatus"
      :custom-validate="customValidate" 
      :value="value"
      :results.sync="validateResults">
    </validate> -->

  </div>
</template>

<script>
import n3Radio from './n3Radio'
import n3RadioBtn from './n3RadioBtn'
import valMixin from './valMixin'
import events from './utils/events'
import validate from './validate'
import type from './utils/type'

export default {
  name: 'n3RadioGroup',
  mixins: [valMixin, events],
  props: {
    value: {
      type: String,
      twoWay: true
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    init (val) {
      if (!type.isUndefined(val)) {
        this.currentValue = val
      } else {
        let children = this.$children
        let ret
        children.forEach((item) => {
          item.currentChecked ? ret = item.label : ''
        })
        this.currentValue = ret
      }
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.broadcast('n3Radio', 'n3@radiogroupChange', val)
      this.broadcast('n3RadioBtn', 'n3@radiogroupChange', val)
      this.$emit('input', val)
      if (type.isFunction(this.onChange)) {
        this.onChange(val)
      }
    }
  },

  created () {
    this.$on('n3@radioChange', (val) => {
      this.init(val)
    })
  },

  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },

  components: {
    n3Radio,
    n3RadioBtn,
    validate
  }
}
</script>

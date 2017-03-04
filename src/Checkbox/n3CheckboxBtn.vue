<template>
  <n3-button 
    @click.prevent="handleClick"
    :class="classObj" 
    :disabled="disabled"
    :type="checked ? 'primary' : 'default'">
    <slot></slot>
  </n3-button>
</template>

<script>
import n3Button from '../Button/n3Button'
import type from '../utils/type'

export default {
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
  events: {
    'n3@checkboxgroupChange' (val) {
      this.checked = val.indexOf(this.value) > -1
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
  methods: {
    handleClick () {
      this.checked = !this.checked
      this.$dispatch('n3@checkboxChange', this)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.checked)
      }
    }
  },
  components: {
    n3Button
  }
}
</script>

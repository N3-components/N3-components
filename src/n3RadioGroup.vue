<template>
<div class="{{prefixCls}}-btn-group {{prefixCls}}-radio-group">
    <template v-if="options">
        <n3-radio 
          v-if="type==='checkbox'" 
          v-for="item in options"
          :value="item.value"
          :checked="item.checked"
          :disabled="item.disabled">
          {{item.label}}
        </n3-radio>

         <n3-radio-btn 
         v-if="type==='button'" 
         v-for="item in options"
         :value="item.value"
         :checked="item.checked"
         :disabled="item.disabled">
         {{item.label}}
        </n3-radio-btn>

    </template>
    <template v-else>
    <slot></slot>
    </template>

    <validate
      :name="name"
      :rules="rules"
      :valid-status.sync="validStatus"
      :custom-validate="customValidate" 
      :value="value"
      :results.sync="validateResults">
    </validate>

  </div>
</template>

<script>
import n3Radio from './n3Radio'
import n3RadioBtn from './n3RadioBtn'
import valMixin from './valMixin'
import validate from './validate'
import type from './utils/type'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: String,
      twoWay: true
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    options: {
      type: Array
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  methods: {
    init (val) {
      if (!type.isUndefined(val)) {
        this.value = val
      } else {
        let children = this.$children
        let ret
        children.forEach((item) => {
          item.checked ? ret = item.value : ''
        })
        this.value = ret
      }
    }
  },
  events: {
    'n3@radioChange' (val) {
      this.init(val)
    }
  },

  watch: {
    value () {
      this.$broadcast('n3@radiogroupChange', this.value)
      if (type.isFunction(this.onChange)) {
        this.onChange(this.value)
      }
    },
    options () {
      this.init()
    }
  },

  ready () {
    this.init()
  },

  components: {
    n3Radio,
    n3RadioBtn,
    validate
  }
}
</script>

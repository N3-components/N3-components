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

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: String,
      twoWay: true
    },
    color: {
      type: String,
      default: 'default'
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

  watch: {
    value () {
      if (typeof this.onChange === 'function') {
        this.onChange(this.value)
      }
    }
  },

  components: {
    n3Radio,
    n3RadioBtn,
    validate
  }
}
</script>

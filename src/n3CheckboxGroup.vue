<template>
  <div class="{{prefixCls}}-btn-group {{prefixCls}}-checkbox-group">
    <template v-if="options">
        <n3-checkbox 
          v-if="type==='checkbox'" 
          v-for="item in options"
          :value="item.value"
          :checked="item.checked"
          :disabled="item.disabled">
          {{item.label}}
        </n3-checkbox>

         <n3-checkbox-btn 
         v-if="type==='button'" 
         v-for="item in options"
         :value="item.value"
         :checked="item.checked"
         :disabled="item.disabled">
         {{item.label}}
        </n3-checkbox-btn>

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
import n3Checkbox from './n3Checkbox'
import n3CheckboxBtn from './n3CheckboxBtn'
import valMixin from './valMixin'
import validate from './validate'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
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
    n3Checkbox,
    n3CheckboxBtn,
    validate
  }

}
</script>
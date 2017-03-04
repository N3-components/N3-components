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
import n3Checkbox from '../Checkbox/n3Checkbox'
import n3CheckboxBtn from '../Checkbox/n3CheckboxBtn'
import valMixin from '../mixin/valMixin'
import validate from '../validate'
import type from '../utils/type'

export default {
  mixins: [valMixin],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
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
    init () {
      let children = this.$children
      let ret = []
      children.forEach((item) => {
        item.checked ? ret.push(item.value) : ''
      })
      this.value = ret
    }
  },
  events: {
    'n3@checkboxChange' (val) {
      this.init()
    }
  },

  watch: {
    value () {
      this.$broadcast('n3@checkboxgroupChange', this.value)
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
    n3Checkbox,
    n3CheckboxBtn,
    validate
  }

}
</script>
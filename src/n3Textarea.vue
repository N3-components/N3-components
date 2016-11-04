<template>
<div :class="classObj" :style="{width:width}">
  <textarea
    :class="`${prefixCls}-form-control`"  
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxLength"
    :style="styleObj"
    :name="name"
    :placeholder="placeholder"
    v-model="value">
  </textarea>

  <validate
    :name="name"
    :valid-status.sync="validStatus"
    :rules="rules"
    :custom-validate="customValidate" 
    :value="value"
    :results.sync="validateResults">
  </validate>

</div>
</template>

<script>
  import validate from './validate'

  export default {
    props: {
      name: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      placeholder: {
        type: String,
        default: ''
      },
      resize: {
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        default: '220px'
      },
      maxLength: {
        type: Number
      },
      maxHeight: {
        type: String
      },
      minHeight: {
        type: String
      },
      value: {
        type: String,
        twoway: true
      },
      validStatus: {
        type: String,
        twoway: true,
        default: ''
      },
      customValidate: {
        type: Function
      },
      rules: {
        type: Array
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    data () {
      return {
        validateResults: {}
      }
    },
    components: {
      validate
    },
    computed: {
      styleObj () {
        let {resize, maxHeight, minHeight} = this
        let style = {}

        style['maxWidth'] = '100%'
        style['width'] = '100%'
        style['maxHeight'] = maxHeight
        style['minHeight'] = minHeight
        !resize ? style['resize'] = 'none' : ''

        return style
      },
      classObj () {
        let {prefixCls, validStatus} = this
        let klass = {}

        klass[prefixCls + '-has-error'] = validStatus === 'error'
        klass[prefixCls + '-has-success'] = validStatus === 'success'
        klass[prefixCls + '-has-warn'] = validStatus === 'warn'

        klass[prefixCls + '-textarea-con'] = true
        klass['inline'] = true

        return klass
      }
    }
  }
</script>

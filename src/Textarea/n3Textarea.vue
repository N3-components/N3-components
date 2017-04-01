<template>
<div :class="classObj" :style="{width:width}">
  <textarea
    :class="`${prefixCls}-form-control`"  
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxLength"
    :style="styleObj"
    :name="name"
    @input="update($event.target.value)"
    @focus="_onFocus"
    @blur="_onBlur"
    :placeholder="placeholder"
    :value="value">
  </textarea>

  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="value">
  </validate>

</div>
</template>

<script>
  import validate from '../validate'
  import valMixin from '../Mixin/valMixin'

  export default {
    name: 'n3Textarea',
    mixins: [valMixin],
    props: {
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
        type: String
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    components: {
      validate
    },
    methods: {
      update (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },
      _onFocus () {
        this.$emit('focus')
      },
      _onBlur () {
        this.$emit('blur')
      }
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
        let {prefixCls} = this
        let klass = {}

        klass[prefixCls + '-textarea-con'] = true
        klass['inline'] = true

        return klass
      }
    }
  }
</script>

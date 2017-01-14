export default {
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ''
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    width: {
      type: String,
      default: '220px'
    },
    customValidate: {
      type: Function
    },
    validStatus: {
      type: String,
      twoway: true,
      default: ''
    },
    rules: {
      type: Array
    },
    hasFeedback: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      twoway: true,
      default: false
    }
  }
}

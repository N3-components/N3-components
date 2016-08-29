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
    focused: {
      type: Boolean,
      twoway: true,
      default: false
    }
  }
}
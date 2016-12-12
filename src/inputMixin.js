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
    rules: {
      type: Array
    },
    hasFeedback: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      validStatus: ''
    }
  }
}

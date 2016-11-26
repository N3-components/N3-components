export default {
  props: {
    name: {
      type: String
    },
    customValidate: {
      type: Function
    },
    rules: {
      type: Array
    },
    validStatus: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      validateResults: {}
    }
  }
}

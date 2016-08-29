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
      twoway: true,
      default: ''
    }
  },
  data () {
    return {
      validateResults: {}
    }
  }
}
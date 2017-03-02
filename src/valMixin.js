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
    }
  }
}

function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.name

    if (name === componentName) {
      child.$emit(eventName, params)
    } else {
      broadcast.call(child, componentName, eventName, params)
    }
  })
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit(eventName, params)
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

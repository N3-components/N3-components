import Vue from 'vue'
import Alert from './n3Alert.vue'

const $body = document.querySelector('body')

const createNode = () => {
  const $node = document.createElement('div')
  $body.appendChild($node)
  return $node
}

const removeNode = $node => {
  $body.removeChild($node)
}

const alert = (options) => {
  const {description, type, dismissable, duration, width, small, placement, message, content, icon} = options
  const instance = new Vue({
    el: createNode(),
    data () {
      return {
        show: false
      }
    },
    components: {
      Alert
    },
    template: `<alert ref="alert" 
      icon="${icon}"
      :description="${description || false}"
      ${width ? 'width="' + width + '"' : ''}
      type="${type || 'default'}"
      :dismissable="${dismissable || true}"
      :duration="${duration}"
      :small="${small || false}"
      placement="${placement || 'top'}"
      message="${message}"
      @hide="destroy"
      @close="destroy">
        ${content}
    </alert>`,
    mounted () {
      this.$nextTick(() => {
        this.$refs.alert.open()
      })
    },
    destroyed () {
      removeNode(this.$el)
    },
    methods: {
      destroy () {
        this.$destroy()
      }
    }
  })
}

export default alert
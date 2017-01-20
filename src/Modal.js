import Vue from 'vue'
import Modal from './n3Modal.vue'

const $body = document.querySelector('body')

const createNode = () => {
  const $node = document.createElement('div')
  $body.appendChild($container)
  return $node
} 

const removeNode = ($node) => {
  $node.removeChild($node)
}

export const confirm = (options) => {
  const {title, onConfirm, onHide, onShow} = options
  const $node = createNode()
  const confirm = new Vue({
    el: $node,
    data () {
      return {
        show: false
      }
    },
    components: {
      Modal
    },
    template: `<Modal title="${title}"
      :show="show"
      :backdrop="false"
      @confirm="handleConfirm"
      @hide="handleHide"
      @show="handleShow">
      <div slot="body">
        ${options.message}
      </div>
    </Modal>`,
    mounted () {
      this.$nextTick(() => {
        this.show = true
      })
    },
    destroyed () {
      removeNode($node)
    },
    methods: {
      handleShow () {
        onShow()
      },
      handleConfirm () {
        onConfirm()
        this.handleHide()
      },
      handleHide () {
        onHide()
        this.show = false
        this.$nextTick(() => {
          this.$destroy()
        })
      }
    }
  })
}

export const alert = (options) => {
  const {title, onConfirm, onHide, onShow} = options
  const $node = createNode()
  const alert = new Vue({
    el: $node,
    data () {
      return {
        show: false
      }
    },
    components: {
      Modal
    },
    template: `<Modal title="${title}"
      :show="show"
      :backdrop="false"
      @hide="handleHide"
      @show="handleShow">
      <div slot="body">
        ${options.message}
      </div>
      <div slot="footer">
        <n3-button @click="handleConfirm">确定</n3-button>
      </div>
    </Modal>`,
    mounted () {
      this.$nextTick(() => {
        this.show = true
      })
    },
    destroyed () {
      removeNode($node)
    },
    methods: {
      handleShow () {
        onShow()
      },
      handleConfirm () {
        onConfirm()
        this.handleHide()
      },
      handleHide () {
        onHide()
        this.show = false
        this.$nextTick(() => {
          this.$destroy()
        })
      }
    }
  })
}
import Vue from 'vue'
import Modal from './n3Modal.vue'

const $body = document.querySelector('body')

const createNode = () => {
  const $node = document.createElement('div')
  $body.appendChild($node)
  return $node
} 

const removeNode = $node => {
  $body.removeChild($node)
}

export const confirm = (options) => {
  const {title, message, effect, onConfirm, onHide, onShow} = options
  const confirm = new Vue({
    el: createNode(),
    data () {
      return {
        show: false
      }
    },
    components: {
      Modal
    },
    template: `<Modal ref="modal" title="${title}"
      effect="${effect || 'fade'}"
      :backdrop="false"
      @confirm="handleConfirm"
      @hide="handleHide"
      @show="handleShow"
      @closed="destroy">
      <div slot="header" v-if="${!title}"></div>
      <div slot="body">
        ${options.message}
      </div>
    </Modal>`,
    mounted () {
      this.$nextTick(() => {
        this.$refs.modal.open()
      })
    },
    destroyed () {
      removeNode(this.$el)
    },
    methods: {
      handleShow () {
        onShow()
      },
      handleConfirm () {
        onConfirm()
        this.$refs.modal.close()
      },
      handleHide () {
        onHide()
      },
      destroy () {
        this.$destroy()
      }
    }
  })
}

export const alert = (options) => {
  const {title, message, effect, onConfirm, onHide, onShow} = options
  const alert = new Vue({
    el: createNode(),
    data () {
      return {
        show: false
      }
    },
    components: {
      Modal
    },
    template: `<Modal title="${title}"
      effect="${effect || 'fade'}"
      ref="modal"
      :backdrop="false"
      @hide="handleHide"
      @show="handleShow"
      @closed="destroy">
      <div slot="body">
        ${message}
      </div>
      <div slot="header" v-if="${!title}"></div>
      <div slot="footer" class="n3-modal-footer">
        <n3-button @click.native="$refs.modal.close">确定</n3-button>
      </div>
    </Modal>`,
    mounted () {
      this.$nextTick(() => {
        this.$refs.modal.open()
      })
    },
    destroyed () {
      removeNode(this.$el)
    },
    methods: {
      handleShow () {
        onShow()
      },
      handleHide () {
        onHide()
      },
      destroy () {
        this.$destroy()
      }
    }
  })
}
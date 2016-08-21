import EventListener from './utils/EventListener'
import type from 'get-type'

const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'scale'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String
    },
    noresize: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      twoWay: true,
      default: true
    },
    onClick: {
      type: Function
    }
  },
  data () {
    return {
      position: {
        top: 0,
        left: 0
      }
    }
  },
  watch: {
    show (val) {
      if (val && !this.noresize) {
        this.$nextTick(() => {
          this.resize()
        })
      }
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    },
    resize () {
      let popover = this.$els.popover
      let triger = this.$els.trigger.children[0]
      popover.style.display = 'block'
      triger.style.position = 'relative'

      switch (this.placement) {
        case 'top' :
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = triger.offsetTop - popover.offsetHeight
          break
        case 'left':
          this.position.left = triger.offsetLeft - popover.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'right':
          this.position.left = triger.offsetLeft + triger.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'bottom':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = triger.offsetTop + triger.offsetHeight
          break
        default:
          console.log('Wrong placement prop')
      }
      popover.style.top = this.position.top + 'px'
      popover.style.left = this.position.left + 'px'
    }
  },
  ready () {
    if (!this.$els.popover) return
    let popover = this.$els.popover
    let triger = this.$els.trigger.children[0]
    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', () => this.show = true)
      this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', () => this.show = false)
    } else if (this.trigger === 'focus') {
      let input = this.$els.trigger.querySelector('input')
      if (input) {
        this._focusEvent = EventListener.listen(input, 'focus', () => this.show = true)
        this._blurEvent = EventListener.listen(input, 'blur', () => this.show = false)
      }
    } else if (this.trigger === 'mouse') {
      this._mousedownEvent = EventListener.listen(triger, 'mousedown', () => this.show = true)
      this._mouseupEvent = EventListener.listen(window, 'mouseup', () => this.show = false)
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggle)
      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!this.$el.contains(e.target)) this.show = false
        if (this.$els.content && this.$els.content.contains(e.target) && type.isFunction(this.onClick)) {
          this.onClick(e, this)
        }
      })
    }
    this.resize()
    popover.style.display = 'none'
    this.show = false
  },
  beforeDestroy () {
    if (this._blurEvent) {
      this._blurEvent.remove()
      this._focusEvent.remove()
    }
    if (this._mouseenterEvent) {
      this._mouseenterEvent.remove()
      this._mouseleaveEvent.remove()
    }
    if (this._clickEvent) {
      this._clickEvent.remove()
      this._closeEvent.remove()
    }
    if (this._mousedownEvent) {
      this._mousedownEvent.remove()
      this._mouseupEvent.remove()
    }
  }
}

export default PopoverMixin
<template>
	<n3-popover
    ref="popover" 
    :effect="effect"
    :header="false" 
    :placement="placement" 
    trigger="click">
    <div slot="content">
        <p>{{content}}</p>
        <div style="float:right; margin:10px;">
          <n3-button size="sm" @click.native="$refs.popover.isShow = false">{{cancelText}}</n3-button>
          <n3-button size="sm" type="primary" @click.native="confirm">{{okText}}</n3-button>
        </div>
    </div> 
    <slot></slot>
  </n3-popover>
</template>

<script>
import n3Popover from '../Popover/n3Popover'
import n3Button from '../Button/n3Button'
import type from '../utils/type'

export default {
  name: 'n3PopConfirm',
  props: {
    effect: {
      type: String,
      default: 'scale'
    },
    content: {
      type: String
    },
    placement: {
      type: String,
      default: 'top'
    },
    onConfirm: {
      type: Function
    },
    okText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    }
  },

  methods: {
    confirm () {
      let self = this
      if (type.isFunction(this.onConfirm)) {
        let promise = this.onConfirm()
        if (type.isPromise(promise)) {
          promise.then((...args) => {
            self.$refs.popover.isShow = false
            return args
          }).catch((...args) => {
            self.$refs.popover.isShow = false
            return Promise.reject(args)
          })
        } else {
          self.$refs.popover.isShow = false
        }
      }
    }
  },

  components: {
    n3Popover,
    n3Button
  }
}
</script>
<template>
	<n3-popover 
		:show.sync="show"
        :effect="effect"
        :header="false" 
        :placement="placement" 
        trigger="click">
        <div slot="content">
            <p>{{content}}</p>
            <div style="float:right; margin:10px;">
              <n3-button size="sm" @click="show = false">{{cancelText}}</n3-button>
              <n3-button size="sm" type="primary" @click="confirm">{{okText}}</n3-button>
            </div>
        </div> 
        <slot></slot>
      </n3-popover>
</template>

<script>
import n3Popover from './n3Popover'
import n3Button from './n3Button'
import type from './utils/type'

export default {
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
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      show: true
    }
  },

  methods: {
    confirm () {
      let self = this
      if (type.isFunction(this.onConfirm)) {
        let promise = this.onConfirm()
        if (type.isPromise(promise)) {
          promise.then((...args) => {
            self.show = false
            return args
          }).catch((...args) => {
            self.show = false
            return Promise.reject(args)
          })
        } else {
          self.show = false
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
<template>
	<n3-popover 
		:show.sync="show"
        :effect="effect"
        :header="false" 
        :placement="placement" 
        trigger="click">
        <div slot="content">
            <p>{{content}}</p>
            <div style="float:right;margin:10px;">
            <n3-button size="sm"  @click="show=false">{{cancelText}}</n3-button>
            <n3-button size="sm" type="primary" @click="confirm">{{okText}}</n3-button>
            </div>
        </div> 
        <slot></slot>
      </n3-popover>
</template>

<script>
import n3Popover from './n3Popover'
import n3Button from './n3Button'

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
      if (typeof this.onConfirm === 'function') {
        this.onConfirm(this)
      }
    }
  },

  components: {
    n3Popover,
    n3Button
  }
}
</script>
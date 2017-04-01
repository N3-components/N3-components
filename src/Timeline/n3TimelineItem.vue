<template>
 	<li :class="`${prefixCls}-timeline-item`">
 		<div :class="`${prefixCls}-timeline-item-tail`"></div>
 		<div :class="[prefixCls+'-timeline-item-head',icon?prefixCls+'-fa '+prefixCls+'-fa-'+icon:'']" :style="style"></div>
 		<div :class="`${prefixCls}-timeline-item-content`">
	 		<slot></slot>
 		</div>
 	</li>
</template>
<script>
export default{
  name: 'n3TimelineItem',
  props: {
    icon: {
      type: String
    },
    color: {
      type: String,
      default: '#333'
    },
    content: {
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    style () {
      return {
        'border-color': this.color,
        'color': this.color
      }
    }
  }
}
</script>
<template>
 	<ul :class="`${prefixCls}-timeline-con`">
 		<template v-if="value">
 			<n3-timeline-item v-for="i in value" :color="i.color" :icon="i.icon" :key="index">
 				<render :context="context || $parent._self" :template="i.content"></render>
 			</n3-timeline-item>
 		</template>
 		<template v-else>
 			<slot></slot>
 		</template>
 	</ul>
</template>
<script>
import n3TimelineItem from './n3TimelineItem'
import render from '../render'

export default{
  name: 'n3Timeline',
  props: {
    value: {
      type: Array
    },
    context: {},
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    n3TimelineItem,
    render
  }
}
</script>
<script>
 import Vue from 'vue'

 export default {
 	props: {
 		context: {},
 		template: {}
 	},
 	render (h) {
 		let template = '<div>' + this.template + '</div>'
 		let render = Vue.compile(template).staticRenderFns[0]
 		if (!render) {
 			render = Vue.compile(template).render
 		}
 		let ret = render.call(this.context, h)
 		return h('div', [ret])
 	}
 }
 </script>
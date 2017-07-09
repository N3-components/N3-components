<script>
 import Vue from 'vue'

 export default {
 	props: {
 		context: {},
 		template: {}
 	},
 	render (h) {
 		let template = '<div class="inline">' + this.template + '</div>'
 		let compile = Vue.compile(template)
 		let l = compile.staticRenderFns.length
 		let ret = []

 		if (l) {
 			compile.staticRenderFns.forEach((i) => {
 				ret.push(i.call(this.context, h))
 			})
 		} else {
 			ret = [compile.render.call(this.context, h)]
 		}
 		return h('div', ret)
 	}
 }
 </script>
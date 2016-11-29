<script>
import Vue from 'vue'

export default {
	props: {
		context: {},
		template: {}
	},
	render (h) {
		console.log(Vue.compile(this.template).render + '',this.template)
		let ret = Vue.compile(this.template).render.call(this.context, h)
		return h('div', [ret])
	}
}
</script>
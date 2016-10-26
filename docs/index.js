import n3Docs from './example/n3Docs'
import headerDocs from './example/headerDocs'
import Vue from 'vue'
import N3Components from '../src/index.js'

// N3Components.install(Vue)
Vue.use(N3Components)
Vue.config.debug = true

new Vue({
  el: 'div',
  template: '#template',
  components: {
    n3Docs,
    headerDocs
  }
})

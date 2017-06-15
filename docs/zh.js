import n3Docs from './example_zh/n3Docs'
import headerDocs from './example_zh/headerDocs'
import Vue from 'vue'
import N3Components from '../src/index.js'

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

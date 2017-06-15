import n3Docs from './example_en/n3Docs'
import headerDocs from './example_en/headerDocs'
import Vue from 'vue'
import N3Components from '../src/index.js'

Vue.use(N3Components, 'en')
Vue.config.debug = true

new Vue({
  el: 'div',
  template: '#template',
  components: {
    n3Docs,
    headerDocs
  }
})

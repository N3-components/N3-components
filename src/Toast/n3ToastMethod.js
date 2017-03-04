import Vue from 'vue'
const n3Toast = Vue.extend(require('./n3Toast'))

export default function (obj) {
  let instance = new n3Toast({
    el: document.createElement('div')
  })

  instance.placement = obj.placement || 'center'
  instance.type = obj.type || 'default'
  instance.closeOnClick = obj.closeOnClick
  instance.duration = obj.duration === undefined ? 3000 : obj.duration
  instance.width = obj.width
  instance.text = obj.text

  Vue.nextTick(() => {
    instance.$appendTo(document.body)
    instance.show = true
    if (instance.duration > 0) {
      setTimeout(() => {
        instance.$remove()
      }, instance.duration)
    }
  })
}


import Vue from 'vue'
const n3Toast = Vue.extend(require('./n3Toast'))

export default function (obj) {
  const domNode = document.createElement('div')
  document.body.appendChild(domNode)
  let instance = new n3Toast({
    el: domNode
  })

  instance.placement = obj.placement || 'center'
  instance.type = obj.type || 'default'
  instance.closeOnClick = obj.closeOnClick
  instance.duration = obj.duration === undefined ? 3000 : obj.duration
  instance.width = obj.width
  instance.text = obj.text
  
  instance.show = true
    
  if (instance.duration > 0) {
    setTimeout(() => {
      instance.show = false
      Vue.nextTick(() => {
        instance.$destroy()
      })
    }, instance.duration)
  }

}


import Vue from 'vue'
import n3ToastComponent from './n3Toast'

const n3Toast = Vue.extend(n3ToastComponent)

export default function (obj) {
  const domNode = document.createElement('div')
  document.body.appendChild(domNode)

  const options = {
    el: domNode,
    propsData: {},
  }

  const allowedProps = ['text', 'placement', 'type', 'duration', 'closeOnClick']

  allowedProps.forEach((prop) => {
    if (Object.keys(obj).includes(prop)) {
      options.propsData[prop] = obj[prop]
    }
  })

  const instance = new n3Toast(options);

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


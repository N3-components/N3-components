<template>
  <transition
    name="n3CollapseTransition"
    @enter="enter"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>
<script>
import velocity from 'velocity-animate'

function animate (node, show, transitionName, done) {
  let ok
  function complete () {
    if (!ok) {
      ok = true
      done()
    }
  }

  node.style.display = show ? 'block' : 'none'
  velocity(node, transitionName, {
    duration: 200,
    complete: complete,
    easing: 'easeInOutQuad'
  })
  return {
    stop () {
      velocity(node, 'finish')
      complete()
    }
  }
}

export default {
  name: 'n3CollapseTransition',
  methods: {
    enter (el, done) {
      return animate(el, false, 'slideDown', done)
    },
    leave (el, done) {
      return animate(el, true, 'slideUp', done)
    }
  }
}
</script>


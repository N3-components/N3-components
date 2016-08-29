export default {
  collapse: {
    enter (el, done) {
      let h
      el.style.maxHeight = ''
      el.style.display = 'block'
      h = el.offsetHeight
      el.style.maxHeight = '0px'

      setTimeout(() => {
        el.style.maxHeight = h + 'px'
        done()
      })
    },
    enterCancelled (el) {
    },
    leave (el, done) {
      el.style.maxHeight = el.offsetHeight + 'px'
      setTimeout(() => {
        el.style.maxHeight = '0px'
        setTimeout(() => {
          done()
        }, 200)
      }, 10)
    },
    leaveCancelled () {
    }
  }
}
const getTop = function (e) {
  let offset = e.offsetTop
  if (e.offsetParent != null) offset += getTop(e.offsetParent)
  return offset
}
const getLeft = function (e) {
  let offset = e.offsetLeft
  if (e.offsetParent != null) offset += getLeft(e.offsetParent)
  return offset
}

const calPosition = function (el) {
	let w = el.offsetWidth
	let h = el.offsetHeight
	let x = getLeft(el) - document.body.scrollLeft
	let y = getTop(el) - document.body.scrollTop
	let ww = document.body.clientWidth
	let wh = document.body.clientHeight
	if (w && h) {
		let position1 = 'right'
		let position2 = 'bottom'

		el.classList.remove('position-right-bottom', 'position-right-top', 'position-left-bottom', 'position-left-top')
		
		if (w + x > ww) {
			position1 = 'left'
		}

		if (h + y  > wh) {
			position2 = 'top'
		}

		if (y - h < 0) {
			position2 = 'bottom'
		}
		el.classList.add('position-' + position1 + '-' + position2)
	}
}

import Vue from 'vue'

export default {
	componentUpdated (el, binding) {
		if (!binding.value) {
			setTimeout(() => {
				el.classList.remove('position-right-bottom', 'position-right-top', 'position-left-bottom', 'position-left-top')
			},500)
			return
		}
		if (binding.value !== binding.oldValue) {
			Vue.nextTick(() => {
				calPosition(el)
			})
		}
	}
}


let countId = (function() {
  let id = 1
  return function() {
    return id++
  }
})()

export default class Node {
  constructor(options) {
    this.id = countId()
    this.parent = null
    
    this.checked = false
    this.expanded = false
    this.visible = true

    // Assign
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name]
      }
    }

    this.level = 0
    this.loaded = false
    this.childNodes = []
    this.loading = false

    if (this.parent) {
      this.level = this.parent.level + 1
    }

    if (store.lazy !== true && this.data) {
      this.setData(this.data)

      if (store.defaultExpandAll) {
        this.expanded = true
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand()
    }
  }
}

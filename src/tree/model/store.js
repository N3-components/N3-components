import type from '../../utils/type'

export default class Store {
  constructor (options) {
    this.currentNode = null
    this.currentNodeKey = ''
    this.checkedMap = {}

    this.data = {}
    this.root = options.instance
  }

  setData (data) {
    this.data = data
    this.root.setData(data)
  }

  getNodeKey (node) {
    return node.value
  }

  setCurrentNodeKey (val) {
    this.currentNodeKey = val
  }

  setCurrentNode(node) {
    this.currentNode = node
    this.currentNodeKey = node.value
  }
  
  getCheckedKeys () {
    return Object.keys(this.checkedMap)
  }

  setCheckedMap (keys) {
    keys.forEach(item => {
      this.checkedMap[item] = true
    })
  }

  setCheckedKeys (keys) {
    !type.isArray(keys) && (keys = [keys])
    keys.forEach(key => {
      if (!this.checkedMap[key]) {
        this.checkedMap[key] = true
      }
    })
  }

  unsetChecked (keys) {
    !type.isArray(keys) && (keys = [keys])
    keys.forEach(key => {
      if (this.checkedMap[key]) {
        delete this.checkedMap[key]
      }
    })
  }
}

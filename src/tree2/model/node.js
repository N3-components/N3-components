let countId = (function() {
  let id = 1
  return function() {
    return id++
  }
})()

/***
 * Node class
 * 
 * @description 创建一个TreeNode节点对应的数据
 * 
 * @param {Object} parent 父节点
 * @param {Object} store 整棵树的Store对象
 * @param {Object} data 数据
 * @param {Boolean} checked 是否选中
 * @param {Boolean} expanded 是否展开
 * @param {Boolean} visible 是否展示该节点
 * 
 */
export default class Node {
  constructor(options) {
    this.id = countId()
    this.parent = null
    
    this.checked = false
    this.expanded = false
    this.visible = true
    this.data = null

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name]
      }
    }

    this.level = 0
    this.loaded = false
    this.loading = false

    if (this.parent) {
      this.level = this.parent.level + 1
    }

    const store = this.store
    if (!store) {
      throw new Error('[Node]store is required!');
    }
    store.registerNode(this);

    if (store.lazy !== true && this.data) {
      this.setData(this.data)

      if (store.defaultExpandAll) {
        this.expanded = true
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand()
    }
    if (!this.data) return
  }

  setData(data) {
    if (!Array.isArray(data)) {
      markNodeData(this, data);
    }

    this.data = data;
    this.childNodes = [];

    let children;
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, 'children') || [];
    }

    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }
}

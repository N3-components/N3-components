<template>

### Tree

<div class="bs-docs-section">

> Tree (base)

<div class="bs-example">
  <n3-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></n3-tree>
</div>

```html
<n3-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></n3-tree>
```

```javascript
export default {
  data() {
    return {
      data: [{
        label: 'folder1',
        children: [{
          label: 'file1'
        }]
      }, {
        label: 'folder2',
        children: [{
          label: 'file2'
        }, {
          label: 'file3'
        }]
      }, {
        label: 'folder3',
        children: [{
          label: 'folder4',
          children: [{
            label: 'file6'
          }]
        }, {
          label: 'file4'
        }, {
          label: 'file5'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
```

> Tree (checked, selected)

<div class="bs-example">
  <n3-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></n3-tree>
</div>

```html
<n3-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></n3-tree>
```

```javascript
export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        regions: [{
          'name': '/root'
        }, {
          'name': '/home'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: '/root' }, { name: '/home' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === '/root') {
          hasChild = true
        } else if (node.data.name === '/home') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: '新建文件夹' + this.count++
            }, {
              name: '新建文件夹' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      }
    }
  }
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| data     | `Array` | `[]` | data |
| empty-text | `String` | Empty Content. | Show text when the data is empty |
| node-key | `String` | — | Each tree node is used as a unique attribute, and the whole tree should be unique |
| props |  | `Object` | — | props |
| leaf-icon | `String` | file | leaf icon |
| child-icon | `String` | folder | child icon |
| closed-icon | `String` | angle-right | closed icon |
| opened-icon | `String` | angle-down | open icon |
| load | `Function` | function(node, resolve) {} | Methods for loading subtree data |
| render-content | `Function` | function(h, { node }) {} | render function |
| highlight-current | `Boolean` | `false` | Whether to highlight the currently selected node |
| current-node-key |  `String, Number` | — | Currently select the node's key, write only attribute |
| default-expand-all | `Boolean` | `false` | Whether to expand all nodes by default |
| expand-on-click-node | `Boolean` | `true` | Whether to expand or shrink the node when the node is clicked (if it is only then the arrow icon will only start or shrink the node.)|
| auto-expand-parent |  | `Boolean` | `true` | Whether to start the parent node automatically when the child node is expanded |
| default-expanded-keys | `Array` | — | The array of the default expanded node's key |
| show-checkbox | `Boolean` | `false` | Whether the node can be checked |
| check-strictly | `Boolean` | `false` | In the case of the check box, whether to strictly follow the father and son are not associated with each other |
| default-checked-keys | `Array` | `[]` | The default check of the node's key array |
| filter-node-method | `Function` | function(value, data, node) | The method that is executed when the tree node is filtered, true returns that the node can be displayed and vice versa |

### props
| name | type | default | description |
| --- | --- | --- | --- |
| label | `String` | label | Specifies that the node tag is a property value for the node object |
| children | `String` | children | Specifies that the subtree is a property value for the node object |

### Methods

| name | description | params |
|------|--------|------|
| filter | Filter the tree nodes | Receive an arbitrary type of parameter, this parameter will be in the filter-node-method as the first parameter |
| getCheckedNodes | If the node can be selected (ie `show-checkbox` is` true`), the array of the currently selected nodes is returned | LeafOnly) to receive a boolean type of parameters, if the `true` only return to the selected leaf node, the default value is` false` |
| setCheckedNodes | Set the currently checked node, use this method must set the node-key attribute | (Nodes) Receive an array of checked node data |
| getCheckedKeys |If the node can be selected (ie `show-checkbox` is` true`), the array of the currently selected nodes is returned | (LeafOnly) to receive a boolean type of parameters, if the `true` only return the selected leaves node keys, the default value is` true` |
| setCheckedKeys | Use the keys to set the currently checked node, and use this method to set the node-key attribute | (Keys, leafOnly) to receive two parameters, 1. check the node's key array 2. boolean type of parameters, if the `true` only set the leaves node selected state, the default value is` true` |
| setChecked | Through the key / data set a node check the state, use this method must set the node-key attribute | (key/data, checked, deep)Receive three parameters, 1. check the node's key or data 2. boolean type, the node is selected 3. boolean type, whether to set the child node, the default is false |

### Events

| name      | description    | params      |
|---------- |-------- |---------- |
| node-click  | The callback when the node is clicked | A total of three parameters, as follows: `data` array to the object attribute corresponding to the node, the corresponding node Node, node assembly itself. |
| check-change  | The node selects the callback when the state changes | A total of three parameters, as follows: `data` array to the object attribute corresponding to the node, whether the node itself is checked, whether there is the selected node in the subtree node |
| current-change | The event that was triggered when the node was currently selected | A total of two parameters, followed by: the current node data, the current node Node object |

</div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: 'folder1',
          children: [{
            label: 'file1'
          }]
        }, {
          label: 'folder2',
          children: [{
            label: 'file2'
          }, {
            label: 'file3'
          }]
        }, {
          label: 'folder3',
          children: [{
            label: 'folder4',
            children: [{
              label: 'file6'
            }]
          }, {
            label: 'file4'
          }, {
            label: 'file5'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        regions: [{
          'name': '/root'
        }, {
          'name': '/home'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      handleNodeClick(data) {
        console.log(data)
      },
       loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: '/root' }, { name: '/home' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === '/root') {
          hasChild = true
        } else if (node.data.name === '/home') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: 'folder' + this.count++
            }, {
              name: 'folder' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      }
    }
  }
</script>
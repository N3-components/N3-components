<template>
  <div class="bs-docs-section" id="树形视图">
    <h1 class="page-header">
      <a href="#树形视图" class="anchor">树形视图</a>
      <span class="author"></span>
    </h1>
    <div class="bs-example">
      <n3-treeview :value.sync="id" :model="files1" class="form-control" labelname="name" valuename="id" children="children"></n3-treeview>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-treeview :value.sync="id"
    :model="files1"
    class="form-control"
    labelname="name"
    valuename="id"
    children="children"
></n3-treeview>

new Vue({
    data: {
        files1: [
            {
                name: '新建文件夹1',
                id: 1,
                tree: true
            },
            {
                name: '我的文档2',
                id: 2,
                tree: false
            },
            {
                name: '新建文件夹3',
                id: 3,
                children: [
                    {
                        name: '我的文档1',
                        id: 4
                    },
                    {
                        name: '新建文件夹4',
                        id: 5,
                        children: [
                        {
                            name: '我的文档3',
                            id: 6
                        },
                        {
                            name: '我的文档4',
                            id: 7
                        }
                        ]
                    }
                ]
            }
        ]
    }
})

        </script> </code></pre>
  </div>
  <h1 class="page-header">
    <a href="#异步加载" class="anchor">异步加载</a>
    <span class="author"></span>
  </h1>
  <div class="bs-example">
    <n3-treeview :value.sync="id" :model="files2" class="form-control" labelname="name" valuename="id" children="children" :load-data="loadList"></n3-treeview>
  </div>
  <pre><code class="language-markup"><script type="language-mark-up">
<n3-treeview :value.sync="id"
    :model="files2"
    class="form-control"
    labelname="name"
    valuename="id"
    children="children"
    :load-data="loadList"
></n3-treeview>

new Vue({
    data: {
        files2: [
            {
                name: '新建文件夹1',
                id: 1,
                tree: true
            },
            {
                name: '我的文档2',
                id: 2,
                tree: false
            },
            {
                name: '新建文件夹3',
                id: 3,
                tree: true
            }
        ],
        loadList(value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    var res = [{
                        name: '我的文档' + Math.ceil(Math.random() * 100000),
                        id: Math.ceil(Math.random() * 100000)
                    }, {
                        name: '新建文件夹' + Math.ceil(Math.random() * 100000),
                        id: Math.ceil(Math.random() * 100000),
                        tree: true
                    }]
                    resolve(res)
                }, 1000)
            })
        }
    }
})

      </script></code></pre>
  </div>

    <h1 class="page-header">
      <a href="#勾选节点" class="anchor">勾选节点</a>
      <span class="author"></span>
    </h1>
    <div class="bs-example">
      <n3-treeview :value.sync="id" :model="files3" class="form-control" labelname="name" valuename="id" children="children" :default-expand-all="true"></n3-treeview>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-treeview :value.sync="id"
    :model="files3"
    class="form-control"
    labelname="name"
    valuename="id"
    children="children"
    checkable="true"
></n3-treeview>

new Vue({
    data: {
        files3: [
            {
                name: '新建文件夹1',
                id: 1,
                tree: true
            },
            {
                name: '我的文档2',
                id: 2,
                tree: false
            },
            {
                name: '新建文件夹3',
                id: 3,
                children: [
                    {
                        name: '我的文档1',
                        id: 4
                    },
                    {
                        name: '新建文件夹4',
                        id: 5,
                        children: [
                        {
                            name: '我的文档3',
                            id: 6
                        },
                        {
                            name: '我的文档4',
                            id: 7
                        }
                        ]
                    }
                ]
            }
        ]
    }
})

        </script> </code></pre>
  </div>
</template>

<script>
  export default {
    computed: {
      id: Date.now()
    },
    data() {
      return {
        files1: [{
          name: '新建文件夹1',
          id: 1,
          tree: true
        }, {
          name: '我的文档2',
          id: 2,
          tree: false
        }, {
          name: '新建文件夹3',
          id: 3,
          children: [{
            name: '我的文档1',
            id: 4
          }, {
            name: '新建文件夹4',
            id: 5,
            children: [{
              name: '我的文档3',
              id: 6
            }, {
              name: '我的文档4',
              id: 7
            }]
          }]
        }],
        files2: [{
          name: '点我异步加载1',
          id: 1,
          tree: true
        }, {
          name: '我的文档2',
          id: 2,
          tree: false
        }, {
          name: '点我异步加载2',
          id: 3,
          tree: true
        }],
        files3: [{
          name: '新建文件夹1',
          id: 1,
          tree: true
        }, {
          name: '我的文档2',
          id: 2,
          tree: false
        }, {
          name: '新建文件夹3',
          id: 3,
          children: [{
            name: '我的文档1',
            id: 4
          }, {
            name: '新建文件夹4',
            id: 5,
            children: [{
              name: '我的文档3',
              id: 6
            }, {
              name: '我的文档4',
              id: 7
            }]
          }]
        }],
        loadList(value) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              var res = [{
                name: '我的文档' + Math.ceil(Math.random() * 100000),
                id: Math.ceil(Math.random() * 100000)
              }, {
                name: '新建文件夹' + Math.ceil(Math.random() * 100000),
                id: Math.ceil(Math.random() * 100000),
                tree: true
              }]
              resolve(res)
            }, 1000)
          })
        }
      }
    }
  }
</script>
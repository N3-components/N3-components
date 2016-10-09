<template>
  <div class="bs-docs-section" id="树形视图">
    <h1 class="page-header">
      <a href="#树形视图" class="anchor">树形视图</a>
      <span class="author"></span>
    </h1>
    <div class="bs-example">
      <n3-tree :value.sync="id" :data="files1" ></n3-tree>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-tree :value.sync="id":data="files1"></n3-tree>
        </script></code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">
new Vue({
    data: {
        files1: [
            {
                label: '新建文件夹1',
                value: 1,
                icon: 'folder',
                children:[]
            },
            {
                label: '新建文件夹3',
                value: 3,
                icon: 'folder',
                children: [
                    {
                        label: '我的文档1',
                        value: 4
                    },
                    {
                        label: '新建文件夹4',
                        value: 5,
                        icon: 'folder',
                        children: [
                        {
                            label: '我的文档3',
                            value: 6
                        },
                        {
                            label: '我的文档4',
                            value: 7
                        }
                        ]
                    }
                ]
            },
            {
                label: '我的文档2',
                value: 2,
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
    <n3-tree  :data="files2" :load-data="loadList"></n3-tree>
  </div>
  <pre><code class="language-markup"><script type="language-mark-up">
<n3-tree :data="files2" :load-data="loadList"></n3-tree>
  </script> </code></pre>
  <pre><code class="language-javascript"><script type="language-javascript">
new Vue({
    data: {
        files2: [
            {
                label: '根目录',
                value: 1,
                children: [],
                icon: 'folder'
            }
        ],
        loadList(value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    var res = [{
                        label: '我的文档' + Math.ceil(Math.random() * 100000),
                        value: Math.ceil(Math.random() * 100000)
                    }, {
                        label: '新建文件夹' + Math.ceil(Math.random() * 100000),
                        value: Math.ceil(Math.random() * 100000),
                        children: [],
                        icon: 'folder'
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
      {{checkedKeys | json}}
      <n3-tree 
        :value.sync="id" 
        :data="files3" 
        :default-expand-all="true" 
        :checkable="true" 
        :on-check="onCheck"
        :checked-keys.sync="checkedKeys">
      </n3-tree>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
    <n3-tree :value.sync="id" :data="files3" checkable="true"></n3-tree>
    </script> </code></pre>

    <pre><code class="language-javascript"><script type="language-javascript">
new Vue({
    data: {
        files3: [
            {
                label: '新建文件夹1',
                value: 1,
                children: []
            },
            {
                label: '我的文档2',
                value: 2
            },
            {
                label: '新建文件夹3',
                value: 3,
                children: [
                    {
                        label: '我的文档1',
                        value: 4
                    },
                    {
                        label: '新建文件夹4',
                        value: 5,
                        children: [
                        {
                            label: '我的文档3',
                            value: 6
                        },
                        {
                            label: '我的文档4',
                            value: 7
                        }
                        ]
                    }
                ]
            }
        ]
    }
})
        </script> </code></pre>

  <h2>参数</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td><code>Array</code></td>
          <td>[]</td>
          <td>树形数据<code>.sync</code></td>
        </tr>
         <tr>
          <td>selected-key</td>
          <td><code>String</code><code>Number</code></td>
          <td></td>
          <td>选中节点的value</td>
        </tr>
        <tr>
          <td>checkable</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否支持checkbox可选</td>
        </tr>
        <tr>
          <td>checked-keys</td>
          <td><code>Array</code></td>
          <td>[]</td>
          <td>选中的节点的value<code>.sync</code></td>
        </tr>
        <tr>
          <td>treeIcon</td>
          <td><code>String</code></td>
          <td>angle-right</td>
          <td></td>
        </tr>
        <tr>
          <td>tree-open-icon</td>
          <td><code>String</code></td>
          <td>angle-down</td>
          <td></td>
        </tr>
        <tr>
          <td>icon</td>
          <td><code>String</code></td>
          <td></td>
          <td>图标</td>
        </tr>
        <tr>
          <td>load-data</td>
          <td><code>Function</code></td>
          <td></td>
          <td>异步加载函数</td>
        </tr>
        <tr>
          <td>on-select</td>
          <td><code>Function</code></td>
          <td></td>
          <td>选择触发函数</td>
        </tr>
        <tr>
          <td>on-expand</td>
          <td><code>Function</code></td>
          <td></td>
          <td>展开触发函数</td>
        </tr>
        <tr>
          <td>expand-all</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>全部展开（异步加载时不支持全部展开）</td>
        </tr>
        <tr>
          <td>sort</td>
          <td><code>Boolean</code></td>
          <td>true</td>
          <td>有子节点的排在没有的前面</td>
        </tr>
        <tr>
          <td>on-check</td>
          <td><code>Function</code></td>
          <td></td>
          <td>checkbox选中触发函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    computed: {
      id: Date.now()
    },
    data () {
      return {
        files1: [{
          label: '我的文档2',
          value: 2
        }, {
          label: '新建文件夹1',
          value: 1,
          children: [],
          icon: 'folder'
        }, {
          label: '新建文件夹3',
          value: 3,
          icon: 'folder',
          children: [{
              label: '我的文档1',
              value: 4
            }, {
              label: '新建文件夹4',
              value: 5,
              icon: 'folder',
              children: [{
                label: '我的文档3',
                value: 6
            }, {
              label: '我的文档4',
              value: 7
            }]
          }]
        }],

        files2: [{
          label: '根目录',
          value: 1,
          children: [],
          icon: 'folder'
        }],
        checkedKeys: [],
        files3: [{
          label: '新建文件夹1',
          value: 1,
          children: []
        }, {
          label: '我的文档2',
          value: 2
        }, {
          label: '新建文件夹3',
          value: 3,
          children: [{
            label: '我的文档1',
            value: 4
          }, {
            label: '新建文件夹4',
            value: 5,
            children: [{
              label: '我的文档3',
              value: 6
            }, {
              label: '我的文档4',
              value: 7
            }]
          }]
        }],
        loadList (value) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              var res = [{
                label: '我的文档' + Math.ceil(Math.random() * 100000),
                value: Math.ceil(Math.random() * 100000)
              }, {
                label: '新建文件夹' + Math.ceil(Math.random() * 100000),
                value: Math.ceil(Math.random() * 100000),
                children: [],
                icon: 'folder'
              }]
              resolve(res)
            }, 1000)
          })
        },
        onCheck () {
          console.log('onCheck')
        }
      }
    }
  }
</script>
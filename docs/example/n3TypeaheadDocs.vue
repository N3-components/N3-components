<template>
  <div class="bs-docs-section" id="自动补全"  >
    <h1 class="page-header"><a href="#自动补全" class="anchor">自动补全</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>
        本地数据
      </h4>
      <n3-typeahead 
        v-model="value"
        :data="USstate" 
        :render="render"
        placeholder=" 发到"
      ></n3-typeahead>
      <hr>
      <h4>
      异步获取
      <n3-tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
        <small style="cursor:pointer">(not working?)</small>
      </n3-tooltip>
      </h4>
      <n3-typeahead 
        placeholder="CCCAddress, async via maps.googleapis.com"
        :on-change="getResult"
        :render="render"
        :items="items"
        :add-format="googleCallback"
      ></n3-typeahead>
      <hr>
      <h4>
      内容模版
      </h4>
      <n3-typeahead 
        :context="_self"
        placeholder="Github users, async via api.github.com"
        :on-change="getGitresults"
        :items="gitItems"
        :render="rendergit"
        :add-format="githubCallback"
      ></n3-typeahead>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

    </script></code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">

    </script></code></pre>

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
          <td>query</td>
          <td><code>String</code></td>
          <td></td>
          <td>绑定的值,需要<code>.sync</code></td>
        </tr>
        <tr>
          <td>data</td>
          <td><code>Array</code></td>
          <td></td>
          <td>本地数组</td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>8</code></td>
          <td>显示的条数</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td></td>
          <td>query变化的回调函数，用于异步请求</td>
        </tr>
         <tr>
          <td>items</td>
          <td><code>Array</code></td>
          <td>[]</td>
          <td> 列表数组，用于异步请求</td>
        </tr>
        <tr>
          <td>on-hit</td>
          <td><code>Function</code></td>
          <td></td>
          <td>当选择一项触发的回调</td>
        </tr>
        <tr>
          <td>render</td>
          <td><code>Function</code></td>
          <td></td>
          <td>渲染函数</td>
        </tr>
        <tr>
          <td>dropdow-width</td>
          <td><code>String</code></td>
          <td>220px</td>
          <td>下拉框宽度</td>
        </tr>
        <tr>
          <td>dropdown-height</td>
          <td><code>String</code></td>
          <td>300px</td>
          <td>下拉框最大高度</td>
        </tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      gitItems: [],
      value: 'Alabama',
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  methods: {
    render (item) {
      return `<div><a>${item}</a></div>`
    },
    // render (item) {
    //   return item.formatted_address
    // },
    getResult (query) {
      let self = this
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
        success (ret) {
          self.items = ret.results
        }
      })
    },
    getGitresults (query) {
      let self = this
      $.ajax({
        url: 'https://api.github.com/search/users?q=' + query,
        success (ret) {
          self.gitItems = ret.items
        }
      })
    },
    rendergit (item) {
      return `<div><img width="18px" height="18px" src="${item.avatar_url}"/> <span>${item.login}</span></div>`
    },
    googleCallback (item) {
      return item.formatted_address
    },
    githubCallback (item) {
      return item.login
    }
  }
}
</script>

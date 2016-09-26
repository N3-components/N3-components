<template>
  <div class="bs-docs-section" id="布局"  >

    <h1 class="page-header"><a href="#布局" class="anchor">布局</a><span class="author"> </span></h1>
    <div class="bs-example">
        <n3-container fluid>
          <n3-row>
              <n3-column :col="8" class="context">
                  :col="8"
              </n3-column>
              <n3-column :col="4" class="context">
                  :col="4"
              </n3-column>
          </n3-row>
          <n3-row>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
              <n3-column :col="1" class="context">
                  1
              </n3-column>
          </n3-row>
        </n3-container>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-container fluid>
  <n3-row>
      <n3-column :col="8" class="context">
          :col="8"
      </n3-column>
      <n3-column :col="4" class="context">
          :col="4"
      </n3-column>
  </n3-row>
  <n3-row>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
  </n3-row>
</n3-container>
    </script></code></pre>
    <h2>n3-container参数</h2>
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
          <td>fluid</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否流式布局</td>
        </tr>
      </tbody>
    </table>
    <h2>n3-column参数</h2>
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
          <td>col</td>
          <td><code>Number</code></td>
          <td><code>false</code></td>
          <td>占的列数</td>
        </tr>
        <tr>
          <td>mode</td>
          <td><code>String</code></td>
          <td><code>'md'</code></td>
          <td>布局模式 xs(手机) sm(平板) md(桌面) lg(大屏幕)</td>
        </tr>
        <tr>
          <td>offset</td>
          <td><code>Number</code></td>
          <td></td>
          <td>偏移值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .context{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #eee;
    border: 1px solid #ddd;
    text-align: center;
    font-size:14
  }
</style>

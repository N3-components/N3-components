<template>
  <div class="bs-docs-section" id="按钮"  >
    <h1 class="page-header"><a href="#按钮" class="anchor">按钮</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>Button</h4>
      <n3-button loading >default</n3-button>
      <n3-button badge="2" >badge</n3-button>
      <n3-button disabled>default</n3-button>
      <n3-button active type="primary" loading>primary</n3-button>
      <n3-button type="success">success</n3-button>
      <n3-button type="info">info</n3-button>
      <n3-button type="warning">warning</n3-button>
      <n3-button type="danger">danger</n3-button>

```html
<n3-button loading >default</n3-button>
<n3-button badge="2" >badge</n3-button>
<n3-button disabled>default</n3-button>
<n3-button type="primary" loading>primary</n3-button>
<n3-button type="success">success</n3-button>
<n3-button type="info">info</n3-button>
<n3-button type="warning">warning</n3-button>
<n3-button type="danger">danger</n3-button>
```

      <n3-button type="primary" size="lg">primary lg</n3-button>
      <n3-button type="primary">primary default</n3-button>
      <n3-button type="primary" size="sm">primary sm</n3-button>
      <n3-button type="primary" size="xs">primary xs</n3-button>

```html
<n3-button type="primary" size="lg">lg</n3-button>
<n3-button type="primary">default</n3-button>
<n3-button type="primary" size="sm">sm</n3-button>
<n3-button type="primary" size="xs">xs</n3-button>
```

    <n3-button-group>
      <n3-button >default</n3-button>
      <n3-button >default</n3-button>
      <n3-button type="primary">primary</n3-button>
      <n3-button >default</n3-button>
    </n3-button-group>
```html
<n3-button-group>
  <n3-button >default</n3-button>
  <n3-button >default</n3-button>
  <n3-button type="primary">primary</n3-button>
  <n3-button >default</n3-button>
</n3-button-group>
```

    <h2>按钮参数</h2>
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
          <td>size</td>
          <td><code>String</code></td>
          <td></td>
          <td> <code>lg</code> <code></code> <code>sm</code> <code>xs</code></td>
        </tr>
        <tr>
          <td>loading</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td><code>加载状态</code></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>禁用状态</td>
        </tr>
        <tr>
          <td>active</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>激活状态</td>
        </tr>
        <tr>
          <td>badge</td>
          <td><code>String</code>  <code>Number</code></td>
          <td></td>
          <td>徽标</td>
        </tr>
        <tr>
          <td>block</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否块级元素</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, 如:  <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code></td>
          <td><code>default</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
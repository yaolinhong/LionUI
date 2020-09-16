---
title: 布局
---
### 布局

1.组件介绍

输入框组件功能及用法如下，支持
* 布局
* 可选侧边栏（目录开关）

2.组件代码

```HTML
  无侧边栏
<g-layout style="height: 100vh;">
<g-header>header</g-header>
<g-content>content</g-content>
<g-footer>footer</g-footer>
</g-layout>
<br>
<g-layout style="height: 100vh;">
  <g-header>header</g-header>
  <g-layout style="height: 50vh;">
    <g-sider>sider</g-sider>
    <g-layout>
      <g-content>sidercontent</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
  </g-layout>
  <br>
</g-layout>
有侧边栏（点击icon展示目录）
<g-layout style="height: 100vh;">
  <g-header>header</g-header>
  <g-layout style="height: 50vh;">
    <g-sider>sider</g-sider>
    <g-content>sidercontent</g-content>
  </g-layout>
  <g-footer>footer</g-footer>
</g-layout>
```

3.组件效果

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

<script>

</script>
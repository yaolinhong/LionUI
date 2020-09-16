---
title: tabs
---
### 标签

1.组件介绍
  * 根据标签切换显示内容
  * 右侧可按需添加按钮
  * 支持icon,支持disabled，默认选择标签
  
2.组件效果

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

3.组件代码
```HTML
<g-tabs :selected.sync="selected">
<g-tabs-head>
  <template slot="actions">
    <button>设置</button>
  </template>

  <g-tabs-items name="woman">美女</g-tabs-items>
  <g-tabs-items name="finance">财经</g-tabs-items>
  <g-tabs-items name="sports">体育</g-tabs-items>
  <g-tabs-items name="news" icon="warning" :disabled=true>新闻</g-tabs-items>
  </g-tabs-head>

  <g-tabs-body>
    <g-tabs-pane name="woman">美女相关咨询</g-tabs-pane>
    <g-tabs-pane name="finance">财经相关咨询</g-tabs-pane>
    <g-tabs-pane name="sports">体育相关咨询</g-tabs-pane>
    <g-tabs-pane name="news">新闻</g-tabs-pane>
</g-tabs-body>
</g-tabs>

```
<script>

</script>
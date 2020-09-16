---
title: collapse
---
### 标签

1.组件功能介绍
* 展示单一内容开关
* 自定义默认打开页面

2.组件效果

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

3.组件代码
```HTML
<div class="collapse">
  <g-collapse :selected-tag.sync="selectedTag">
    <g-collapse-item title="title1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="title2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="title3" name="3">内容3</g-collapse-item>
  </g-collapse>
  single
  <g-collapse :selected-tag.sync="selectedTag" :single="true" >
    <g-collapse-item title="title1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="title2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="title3" name="3">内容3</g-collapse-item>
  </g-collapse>
</div>

```
<script>

</script>
<script>

</script>
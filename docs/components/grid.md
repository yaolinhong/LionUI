---
title: 格栅系统
---

### 格栅系统

1.组件介绍

输入框组件功能及用法如下，支持
* 24等分格栅
* 响应式布局格栅
* 设置格栅空隙

2.组件效果

<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>


3.组件代码

```HTML
  <div class="wrapper">
  <div class="box">
    响应式示例
    <g-row>
      <g-col span="24" :pc="{span:8,offset:0}">
        <div class="demo">内容1</div>
      </g-col>
      <g-col span="24" offset="0" :pc="{span:8,offset:8}">
        <div class="demo">内容2</div>
      </g-col>
    </g-row>
    无空隙格栅
    <g-row>
      <g-col span="12">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="2">
        <div class="demo"></div>
      </g-col>
      <g-col span="22">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <br>
    <hr>
  </div>
  <div class="box">
    间隙格栅 gutter=20
    <g-row gutter="20">
      <g-col span="12">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="2">
        <div class="demo"></div>
      </g-col>
      <g-col span="22">
        <div class="demo"></div>
      </g-col>
    </g-row>
<br><hr></div></div>
```
<script>

</script>
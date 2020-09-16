---
title: popover
---
### 悬浮窗

1.组件介绍
  * 支持hover和click触发来展示内容
  * 支持选择浮窗position
  
2.组件效果

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

3.组件代码
```HTML
    <g-popover position="bottom" >
      <template slot="content">
        很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容</template>
      <button>按钮1</button>
    </g-popover>
        <g-popover trigger="hover">
          <button>按钮2</button>
          <template slot="content">浮窗内容</template>
        </g-popover>
        <g-popover position="left">
          <button>按钮3</button>
          <template slot="content">浮窗内容</template>
    </g-popover>
    <g-popover position="right" trigger="click">
      <button>按钮4</button>
      <template slot="content">浮窗内容</template>
    </g-popover>

```
<script>

</script>
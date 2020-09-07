---
title: Button
---
###  按钮
1.组件介绍

按钮组件功能及用法如下，支持
* 添加icon
* 设置icon位置（left、right）
* 设置加载状态


2.组件效果

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>


3.组件代码

```HTML
<g-button>默认按钮</g-button>
<g-button icon="setting" icon-position="right">按钮</g-button>
<g-button :loading="loading"  icon="setting" 
@click="loading=!loading">加载按钮</g-button>

<g-button-group>
<g-button class="left" icon="left" 
icon-position="left">上一页</g-button>
<g-button>更多</g-button>
<g-button class="right" icon="right" 
icon-position="right">下一页</g-button>
</g-button-group>
```
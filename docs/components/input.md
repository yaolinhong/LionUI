---
title: Input
---
###  输入框
1.组件介绍

输入框组件功能及用法如下，支持
* 双向绑定
* disabled输入框（不可focus）
* readonly输入框
* error输入框


2.组件效果

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>


3.组件代码

```HTML
<g-input v-model="message"></g-input>
<button @click="message+=1">+1</button>
<p>{{ message }}</p>
<g-input></g-input>
<g-input value="disabled输入框（不能focus）" :disabled="true"></g-input>
<g-input value="只读输入框(可以focus)" :read-only="true"></g-input>
<g-input value="错误输入框" error="可编辑错误信息"></g-input>
```
<script>

</script>
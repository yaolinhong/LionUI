---
title: toast
---
### 标签

1.组件介绍
  * 支持设置自动关闭事件/点击关闭
  * 支持写入HTML语法
  * 支持传入回调

2.组件效果

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

3. 想要使用 Toast 组件，首先需要引入该组件,
然后使用 Vue 官方文档中插件的使用方法使用该插件。
```js
import plugin from "../../../src/plugin";
Vue.use(plugin)
import toast from "../../../src/toast";

```
4.组件代码
* template部分
```HTML
  <button class="toast" @click="showToast('top')">上弹窗</button>
  <button class="toast" @click="showToast('middle')">中间</button>
  <button class="toast" @click="showToast('bottom')">下弹窗</button>
```
* Vue的script部分
```js
export default {
name: "toast-demo",
  components:{toast},
  methods:{
    showToast(position){
      this.$toast(` ${parseInt(Math.random() * 100)}已发送 `, {
        position,
        enableHtml: false,
        closeButton: {
          text: 'OK',
          callback () {
            console.log('他说ok了')//传入回调
          }
        },
        autoClose: 1,
      })
    }
  }
}
```
### toast.option

1. position: top/middle/bottom 控制toast显示位置
2. enableHtml: true/false 是否支持html
3. closeButton:  
   a. text  文本内容/html内容  
   b. callback  传入的回调函数  
   c. autoClose 自动关闭时间（s）

[![Build Status](https://travis-ci.org/yaolh1995/LionUI.svg?branch=master)](https://travis-ci.org/yaolh1995/LionUI)
---
title:组件
---
# 组件
[Button](./button.md)


这是我在学习 Vue 过程中做的一个 UI 框架，希望对您有用。


使用本框架前请在CSS中开启border-box
```
*,*::before,*::after{box-sizing: border-box;margin:0;padding:0;}

```
安装lionUI
```
npm i --save lionui-test
```

引入lionUI
```
import {Button, Icon} from  "lionui-test"
import "lionui-test/dist/index.css"

export default {
  name: 'App',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

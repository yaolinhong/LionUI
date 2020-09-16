[![Build Status](https://travis-ci.org/yaolh1995/LionUI.svg?branch=master)](https://travis-ci.org/yaolh1995/LionUI)

<div align=center>
<img src="http://ylh1995.gitee.io/lion-ui-page/Lion.png">
</div>   
这是我在学习 Vue 过程中做的一个 UI 框架，希望对您有用。


使用本框架前请在CSS中开启border-box
```
*,*::before,*::after{box-sizing: border-box;margin:0;padding:0;}

```
安装lionUI
```
npm i --save lion-ui-demo
```

引入lionUI
```
import {Button, Icon} from  "lion-ui-demo"
import "lionui-test/dist/index.css"

export default {
  name: 'App',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

### 添加 CSS 样式 
使用本框架前，请在 CSS 中开启 border-box
``` CSS
*，*::before,*::after{ box-sizing: border-box }
```
仅支持IE 8 及以上浏览器。

### 引入组件

``` js
import { Button } from 'lion-ui-demo'
import 'lion-ui-demo/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button
    }
}
```

### 使用

```HTML
<template>
<div>
<g-button>默认按钮</g-button>
</div>
</template>
```

### 完整引入
```js
import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
         , Row, Sider, Tabs, TabsHead, TabsBody, TabsItems, TabsPane, Toast,plugin
       } from 'lion-ui-demo'
import 'lion-ui-demo/dist/index.css'    
import Vue from 'vue'
Vue.use(plugin)

export default {
  name: 'app',
  components: {
        'g-button':Button,
        'g-icon':Icon,
        'g-button-group':ButtonGroup,
        'g-col':Col,
        'g-collapse':Collapse,
        'g-collapse-item':CollapseItem,
        'g-content': Content,
        'g-footer': Footer,
        'g-header': Header,
        'g-input': Input,
        'g-layout': Layout,
        'g-popover': Popover,
        'g-row': Row,
        'g-sider': Sider,
        'g-tabs': Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-body': TabsBody,
        'g-tabs-items': TabsItems,
        'g-tabs-pane': TabsPane,
        'g-toast': Toast,
 }
}
```



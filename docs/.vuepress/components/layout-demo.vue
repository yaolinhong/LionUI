<template>
  <div class="wrapper">
    无侧边栏
    <g-layout style="height: 100vh;">
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
  </g-layout>
    <br>
    有侧边栏（点击icon展示目录）
    <g-layout style="height: 100vh;">
      <g-header>header</g-header>
      <g-layout style="height: 50vh;">
        <g-sider>sider</g-sider>
        <g-content>sidercontent</g-content>
      </g-layout>
      <g-footer>footer</g-footer>
    </g-layout>
  </div>


</template>

<script>
import Layout from "../../../src/layout"
import Header from "../../../src/header"
import Content from "../../../src/content"
import Footer from "../../../src/footer"
import Sider from "../../../src/sider"

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider,
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      message: "双向绑定示例",
      selectedTab: 'sports'
    }

  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sider {
  background: #333;
}

.header {
  background: #999;
  height: 100px;
}

.footer {
  background: #ccc;
  height: 50px;
}
.content{
  background: #dddddd;
}
</style>
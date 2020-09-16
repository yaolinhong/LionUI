<template>
  <div class="wrapper">
    <g-tabs :selected.sync="selected">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-items name="woman" icon="warning">美女</g-tabs-items>
        <g-tabs-items name="finance">财经</g-tabs-items>
        <g-tabs-items name="sports">体育</g-tabs-items>
        <g-tabs-items name="news"  :disabled=true>新闻</g-tabs-items>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">美女相关咨询</g-tabs-pane>
          <g-tabs-pane name="finance">财经相关咨询</g-tabs-pane>
          <g-tabs-pane name="sports">体育相关咨询</g-tabs-pane>
          <g-tabs-pane name="news">新闻</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItems from "../../../src/tabs-items.vue";
import TabsPane from "../../../src/tabs-pane";

export default {
  components: {
    'g-tabs':Tabs,
    'g-tabs-body':TabsBody,
    'g-tabs-head':TabsHead,
    'g-tabs-items':TabsItems,
    'g-tabs-pane':TabsPane} ,

  data(){
    return{
      selected: 'finance'
    }
  }

}
</script>

<style lang="scss" scoped>
* {margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
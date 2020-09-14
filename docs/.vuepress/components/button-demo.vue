<template>
  <div class="wrapper">
    <g-button>默认按钮</g-button>
    <g-button icon="setting" icon-position="right">设置</g-button>
    <g-button :loading="loading"  icon="setting"
              @click="loading=!loading">加载按钮
    </g-button>
    <g-button-group>
      <g-button class="left" icon="left" icon-position="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button class="right" icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
  name: 'button-demo',
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  },
  data() {
    return {
      loading: false,
      message: "双向绑定示例信息",
      selectedTab: 'sports'
    }
  }

  ,
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
> .g-button{
  margin-bottom: 10px}
}
</style>
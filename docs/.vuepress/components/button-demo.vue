<template>

  <div class="box">
    <g-button :loading="loading1" loading1="!loading1"
              @click="loading1=!loading1" icon="setting"
              icon-position="left">
      点我
    </g-button>
    <g-button :loading="loading2" loading2="!loading2"
              @click="loading2=!loading2" icon="setting"
              icon-position="right">
      点我
    </g-button>
    <g-button :loading="loading3" loading3="!loading3"
              @click="loading3=!loading3">按钮</g-button>
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
      loading1: false,
      loading2: false,
      loading3: false,
      message: "双向绑定示例信息",
      selectedTab: 'sports'
    }
  }

,
}
</script>

<style lang="scss" scoped>

</style>
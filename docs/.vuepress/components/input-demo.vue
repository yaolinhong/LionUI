<template>
  <div class="box">
    <g-input v-model=" message "></g-input> <button @click="message+=1">+1</button>
    <p>{{ message }}</p>
    <g-input></g-input>
    <br>
    <g-input value="disabled输入框（不能focus）" :disabled="true"></g-input>
    <br>
    <g-input value="只读输入框" :read-only="true"></g-input>
    <br>
    <g-input value="错误输入框" error="错误信息"></g-input>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components: {
    'g-input': Input
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
.box {
  display: flex;
  flex-direction: column;
> button {width: 2em}
}

</style>
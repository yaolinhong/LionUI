<template>
<div class="wrapper">
  <button class="toast" @click="showToast('top')">上弹窗</button>
  <button class="toast" @click="showToast('middle')">中间</button>
  <button class="toast" @click="showToast('bottom')">下弹窗</button>

</div>

</template>

<script>
import plugin from "../../../src/plugin";
Vue.use(plugin)
import toast from "../../../src/toast";
import Vue from "vue";
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
            console.log('他说ok了')
          }
        },
        autoClose: 1,
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper{
  position: relative;
}
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
button { font-size: $font-size;
  height: $button-height;padding: 0 0.5em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex; justify-content: center; align-items: center; margin-left: 10px;
  vertical-align: middle;
  &:hover { border-color: $border-color-hover; }
  &:active { background-color: $button-active-bg; }
  &:focus { outline: none; }

}
</style>
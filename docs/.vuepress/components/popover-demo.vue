<template>
  <div class="popover" >
    <g-popover position="bottom" >
      <template slot="content">
        很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容</template>
      <button>按钮1</button>
    </g-popover>
        <g-popover trigger="hover">
          <button>按钮2</button>
          <template slot="content">hover显示浮窗</template>
        </g-popover>
        <g-popover position="left">
          <button>按钮3</button>
          <template slot="content">点击显示浮窗内容</template>
    </g-popover>
    <g-popover position="right" trigger="click">
      <button>按钮4</button>
      <template slot="content">浮窗内容</template>
    </g-popover>
  </div>

</template>

<script>
import popover from "../../../src/popover";
import Vue from "vue";
export default {
name: "popover-demo",
  components:{'g-popover':popover},
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
.popover {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
}

</style>
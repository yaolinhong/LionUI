<template>
  <div class="wrapper">
  <div class="box">
    响应式示例
    <g-row>
      <g-col span="24" :pc="{span:8,offset:0}">
        <div class="demo">内容1 手机两行；PC单行显示</div>
      </g-col>
      <g-col span="24" offset="0" :pc="{span:8,offset:8}">
        <div class="demo">内容2 手机两行；PC单行显示</div>
      </g-col>
    </g-row>
    <br>
    <hr>
    无空隙格栅
    <g-row>
      <g-col span="12">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="4">
        <div class="demo"></div>
      </g-col>
      <g-col span="20">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <br>
    <hr>
  </div>
  <div class="box">
    间隙格栅 gutter=20
    <g-row gutter="20">
      <g-col span="12">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="4">
        <div class="demo"></div>
      </g-col>
      <g-col span="20">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <br>
    <hr>
  </div>
  </div>
</template>
<script>

import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
components:{
  'g-col': Col,
  'g-row':Row,}
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  margin: 20px;
}
.demo {
  background-color: #ddd;
  border: 1px solid #666;
  height: 100px;
}
</style>
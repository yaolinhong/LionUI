<template>
  <!--  单文件组件-->
  <button
      @click="$emit('click')"
      class="g-button"
      :class="{[`icon-${iconPosition}`]:true}">
   <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>
<script>
import Vue from "vue"
import  Icon from "./icon.vue"
Vue.component("g-icon",Icon)
export default {
 // props: ["icon","iconPosition"]

  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:"left",
    },
    loading:{
      type:Boolean,
      default: false
  },
  }
}
</script>
<style lang="scss">
@keyframes  spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
.loading {
animation: spin 0.9s infinite linear;
  padding: 0.1em;
}
.g-button {
  font-size: var(--font-size);height: var(--button-height);padding: 0 1em;vertical-align: middle;border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
  display: inline-flex;justify-content: center;align-items: center;
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus {outline: none;}
  > .content{order: 2;}
  > .icon {order:1;margin-right: .4em}
  &.icon-right{
    > .content {order:1;}
    > .icon{order:2;margin-right:0;margin-left: .4em;} } }
</style>
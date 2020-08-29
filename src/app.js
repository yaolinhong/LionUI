import Vue from 'vue/dist/vue.js';
import Button from './button.vue';
import Icon from './icon'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)


new Vue({
    el:"#app",
})
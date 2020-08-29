import Vue from 'vue/dist/vue.js';
import Button from './button.vue';
import Icon from './icon'
import ButtonGroup from "./button-group.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component("g-button-group",ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})
//单元测试
import chai from 'chai'

const expect = chai.expect
{
    //console.log(Button) Button是一个对象
    const Constructor = Vue.extend(Button)
    //Constructor是一个函数，通过这个函数构造一个button
    const button = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    //通过js把按钮挂载到页面
    button.$mount()
    //button里面的元素找use元素
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#icon-settings")
}
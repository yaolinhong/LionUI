import Vue from 'vue/dist/vue.js';
import Button from './button.vue';
import Icon from './icon'
import ButtonGroup from "./button-group.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component("g-button-group", ButtonGroup)

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
import spies from "chai-spies";
chai.use(spies)
try{
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    //Constructor是一个函数，通过这个函数构造一个button
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    //通过js把按钮挂载到页面
    vm.$mount()
    //button里面的元素找use元素
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#icon-settings")
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
            propsData: {
                icon: "settings",
                loading: true
            }
        }
    )
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#icon-loading")
    button.$el.remove()
    button.$destroy()//清理

}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')//css所有的属性值，都是字符串，所以此处是字符串2
    vm.$el.remove()
    vm.$destroy()//清理
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    const spy = chai.spy(function(){})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}} catch(error){
    window.errors=[error]}
    finally {
    window.errors&&window.errors.forEach((error)=>{console.error(error.message)})
}
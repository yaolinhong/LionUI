import Vue from 'vue/dist/vue.js';
import vm from './button.vue';
import Icon from './icon'
import ButtonGroup from "./button-group.vue"

Vue.component('g-button', vm)
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

const expect = chai.expect
{
    //console.log(Button) Button是一个对象
    const Constructor = Vue.extend(vm)
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
    console.log(useElement)
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#icon-settings")
}
{
    const Constructor = Vue.extend(vm)
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
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')//css所有的属性值，都是字符串，所以此处是字符串1
    vm.$el.remove()
    vm.$destroy()//清理
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(vm)
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
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
        }
    })
    vm.$mount()
    vm.$on('click',function (){
        console.log(1)
    })
    //期望这个函数被执行；
    let button =vm.$el
    button.click()

}
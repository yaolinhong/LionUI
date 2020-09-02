const expect = chai.expect;
import input from "../src/input";
import Vue from 'vue'
import Input from '../src/input'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
})
describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
        vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
        ['change', 'input', 'focus', 'blur']
            .forEach((eventName) => {
                 vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发input的change 事件
                let event = new Event(eventName);
                Object.defineProperty(
                    event, 'target',
                    {value: {value: 'hi'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(event)
                expect(callback).to.have.been.calledWith("hi");
            })
    })
})

<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 1,
      validator (value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton: {
      type: Object,
      default: {
        text: "关闭",
        callback: undefined
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },

  mounted() {
    this.updateStyles()
    this.AutoClose()
  },
  computed:{
    toastClasses(){
      return {[`position-${this.position}`]:true}
    }
  },
  methods: {
    close() {
      this.$el.remove()//将元素remove；
      this.$emit('close')//触发一个close事件（给测试用例检测）
      this.$destroy()//把自己destroy
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    AutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose* 1000)
      }
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) //this === toast实例,再次调用vm执行其他操作；
      }
    }
  }
}
</script>
<style scoped lang="scss">
$font-size:14px;
$toast-min-height:40px;
$toast-bg:rgba(0,0,0,0.75);
@keyframes slide-up {
  0%{opacity: 0;transform:translateY(100%);}
  100%{opacity:1;transform: translateY(0%);}}
@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%);}
  100% {opacity: 1;transform: translateY(0%);}
}
@keyframes fade-in {
  0% {opacity: 0; }
  100% {opacity: 1;}
}
.wrapper {
  position: fixed;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast{
  min-height: $toast-min-height; font-size: $font-size;
  display: flex; align-items:center;justify-content: center; background: $toast-bg; border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5); padding: 0 16px; color:white;
  line-height: 1.8;
  .message{
    padding:8px 0;
  }
  .close{
    margin-left: 16px;
    flex-shrink: 0;
  }
  .line{
    height: 100%;
    border-left:1px solid #666;
    margin-left:16px;
  }
}
</style>
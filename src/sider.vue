<template>
  <transition name="slide-fade">
  <div class="sider" v-if="visible">
    <button class="close" @click="toggle">关闭侧边框</button>
    <slot/>
  </div>
    </transition>

</template>
<script>
export default {
  data() {
    return {visible: true}
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
}
</script>
<style lang="scss">
.sider {
  position: relative;
}

.close {
  position: absolute;
  right: 0;
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(-10px);
  opacity: 0;
}

</style>
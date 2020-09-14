<template>
  <div class="sider" @touchstart="hoverSide" @mousedown="hoverSide">
    <div class="icon">icon</div>
    <transition name="slide-fade">
      <div class="nav" v-if="visible">
        <slot/>
      </div>
    </transition>
  </div>


</template>
<script>

export default {
  name:'g-sider',
  props: {
    width: {
      type: [Number, String],
      default: '30%'
    },
  },
  data() {
    return {visible: true}
  },
  methods: {
    hoverSide: function (event) {
      if (window.ontouchstart === null && event.changedTouches !== undefined && event.changedTouches[0].clientX <= 50) {
        this.visible = !this.visible
      } else if (event.screenX <= 50) {
        this.visible = !this.visible
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.sider {
  display: flex;
}

.icon {
  width: 2em;
  background: #000;
  color: #dddddd;
  padding-right: 10px;
}

.nav {
  background: white;
  flex-grow: 1;
}

.close {
  position: absolute;
  right: 0;
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

</style>
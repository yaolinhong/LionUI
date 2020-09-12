<template>
  <div class="popover-wrapper">
    <div ref="contentWrapper" class="content-wrapper"
         style="position: absolute"
         v-if="visbile">
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <button @click.stop="showContent" ref="button" style="position: relative">点击</button>
  </div>


</template>

<script>
export default {
  data() {
    return {
      visbile: false
    }
  },
  methods: {
    handleClick() {
      this.visbile = !this.visbile
      document.removeEventListener("click", this.handleClick)
    },
    showContent: function () {
      this.visbile = !this.visbile
        setTimeout(() => {
          const {contentWrapper} = this.$refs
          if(contentWrapper!==undefined){
          let {left, top} = this.$refs.button.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + "px";
          this.$refs.contentWrapper.style.top = top + "px";
          document.body.appendChild(contentWrapper)
          console.log('添加了监听器')
          document.addEventListener("click", this.handleClick)}
      }, 0)
    }
  }
}
</script>


<style lang="scss">
.popover-wrapper {
  min-height: 1.2em;
  min-width: 200px;
}

.button {
  min-height: 1.2em;
  min-width: 50px;
}

.content-wrapper {
  border: 1px solid red;
  position: absolute;
  transform: translateY(-100%);
}

</style>
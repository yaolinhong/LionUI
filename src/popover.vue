<template>
  <div class="popover-wrapper">
    <div ref="contentWrapper" class="content-wrapper"
         style="position: absolute"
         v-if="visbile" @click.stop>
        <slot name="content"></slot>
    </div>
    <span style="display: inline-block;position: relative;"
          ref="button"
          @click.stop="showPopover" >
      <slot></slot>
    </span>
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
    closePopover() {
      document.removeEventListener("click", this.closePopover)
      this.visbile = false
    },
    computedContent() {
      setTimeout(() => {
        const {contentWrapper} = this.$refs
        if (contentWrapper !== undefined && this.visbile === true) {
          let {left, top} = this.$refs.button.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX +"px";
          this.$refs.contentWrapper.style.top = top + window.scrollY+ "px";
          document.body.appendChild(contentWrapper)}}, 0)
    },
    showPopover() {
      if (this.visbile === false) {
        this.visbile = true
        this.computedContent()
        document.addEventListener("click", this.closePopover)
      } else {
        this.closePopover()
      }
    }
  }
}
</script>


<style lang="scss">
$border-color:#333;
$border-radius:4px;
.popover-wrapper {
display: inline-block;
  vertical-align: top;
  position: relative;
}

.button {
  min-height: 1.0em;
}

.content-wrapper {
  border: 1px solid $border-color;
  position: absolute;
  transform: translateY(-100%);
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border-radius: $border-radius;
  filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  background-color: white;
  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,&::after{
    content: '';display: block;
    width: 0;height: 0;
    border-radius: $border-radius;
    position: absolute;left: 10px;
    border:10px solid transparent;
  }
  &::before{
   top: 100%;
    border-top-color:$border-color ;
  }
  &::after{
    top: calc(100% - 1.5px);

    border-top-color: white;
  }
}

</style>
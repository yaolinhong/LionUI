<template>
  <div class="popover-wrapper">
    <div ref="contentWrapper" class="content-wrapper" :class="`position-${position}`"
         style="position: absolute"
         v-if="visbile" @click.stop>
      <slot name="content"></slot>
    </div>
    <span style="display: inline-block;position: relative;"
          ref="button"
          @click.stop="showPopover">
      <slot></slot>
    </span>
  </div>


</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'top',
    }
  },
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
      const {contentWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const height2 = contentWrapper.getBoundingClientRect().height
      let {left, top, height, width} = this.$refs.button.getBoundingClientRect()
      let positions={
        top:{left: left + window.scrollX + "px", top:top + window.scrollY + "px"},
        bottom:{left:left + window.scrollX + "px", top:top + height + window.scrollY + "px"},
        left:{left:left + window.scrollX + "px", top:top +(height-height2)/ 2 + window.scrollY + "px"},
        right:{left:left + width + window.scrollX + "px",
          top:top +(height-height2) / 2 + window.scrollY + "px"}
      }
      contentWrapper.style.left=positions[this.position].left
      contentWrapper.style.top=positions[this.position].top

    },

    showPopover() {
      if (this.visbile === false) {
        this.visbile = true
        this.$nextTick(
            () => {
              this.computedContent()
              document.addEventListener("click", this.closePopover)
            }
        )

      } else {
        this.closePopover()
      }
    }
  }
}
</script>


<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover-wrapper {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.button {
  min-height: 1.0em;
}

.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border-radius: $border-radius;
  border: 1px solid $border-color;
  word-break: break-all;
  padding: 0.5em 1em;
  max-width: 20em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background-color: white;

  &::before, &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-radius: $border-radius;
    position: absolute;
    border: 10px solid transparent;
  }
}

.position-top {
  transform: translateY(-100%);
  margin-top: -10px;
  left: 10px;

  &::before {
    top: 100%;
    border-top-color: $border-color;
  }

  &::after {
    top: calc(100% - 1.5px);
    border-top-color: white;
  }
}

.position-bottom {
  margin-top: 10px;
  left: 10px;

  &::before {
    bottom: 100%;
    border-bottom-color: $border-color;
  }

  &::after {
    bottom: calc(100% - 1.5px);
    border-bottom-color: white;
  }
}

.position-left {
  transform: translateX(-100%);
  margin-left: -10px;

  &::before {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-left-color: $border-color;
  }

  &::after {
    left: calc(100% - 1.5px);
    top: 50%;
    transform: translateY(-50%);
    border-left-color: white;
  }
}

.position-right {
  margin-left: 10px;

  &::before {
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    border-right-color: $border-color;
  }

  &::after {
    left: 0;
    top: 50%;
    transform: translate(calc(-100% + 1.5px), -50%);
    border-right-color: white;
  }
}
</style>
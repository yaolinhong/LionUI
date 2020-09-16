<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'g-tabs-head',
  inject: ['eventBus'],
  data() {
    return {
      x: false
    }

  },
  created() {
    this.eventBus.$on('update:selected',
        (selectedTab, vm) => {
          //新增一个[更新UI任务]到队列里面，把代码放到更新UI任务后面；
          this.$nextTick(() => {
            let {width,left,top,height} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = window.scrollX + left +'px'
            this.$refs.line.style.top= height+ window.scrollY+top+'px'
          })

        }
    )

  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }


}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #999999;

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .line {
    position: absolute;
    height: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.5s;
    z-index: 1;
  }
}
</style>
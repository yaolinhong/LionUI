<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" ></div>

    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  data() {
    return{
      x:false
    }

  },
  created() {
    this.eventBus.$on('update:selected',
        (selectedTab, vm) => {
          //新增一个[更新UI任务]到队列里面，把代码放到更新UI任务后面；
          this.$nextTick(()=>{
            let {width, height, top, left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left}px`
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
  position: relative;

  > .actions-wrapper {
    margin-left: auto;
  }

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 1s;
  }
}
</style>
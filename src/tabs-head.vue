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
  inject: ['eventBus'],
  created() {
    this.eventBus.$emit('update:selected', 'eventBus数据')

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
$blue:blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  position: relative;

  > .actions-wrapper {
    margin-left: auto;
  }
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid  $blue;
    width: 100px;
  }
}
</style>
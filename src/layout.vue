<template>
  <div class="layout" :class="layoutClass">
    <slot/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    console.log(
        this.$children.forEach((vm) => {
          console.log(vm.$options.name)
          if (vm.$options.name === 'g-sider') {
            this.layoutClass.hasSider = true
          }
        })
    )
  }
}
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.hasSider {
  display: flex;
  flex-direction: row;
}

</style>
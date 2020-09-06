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
            this.$children.forEach((vm) => {
              if (vm.$options.name === 'g-sider') {
                this.layoutClass.hasSider = true
          }
        })
  }
}
</script>
<style lang="scss" scoped>
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
<template @click="onUpdateSelectTab">
  <slot/>
</template>
<script>
export default {
  data() {
    return {
      eventBus: new Vue()
    }

  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true,
      default: "horizontal",
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  provide() {
    return {
      event: this.eventBus
    }
  }
  // created() {
  // },
  //methods:{
  //   onUpdateSelectTab(){
  //     this.$emit('update:selectTab','tabs')
  //   }
  // }
}
</script>

<style scoped>

</style>
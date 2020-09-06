<template >
  <div class="tabs" >
    <slot/>
  </div>
</template>
<script>
import Vue from 'vue'
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
      default: "horizontal",
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected','this.selected')
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
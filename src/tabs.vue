<template >
  <div class="tabs" >
    <slot/>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'g-tabs',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    selected: {
      type: String,
      required: true,
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
    this.$children.forEach((vm)=>{
      if (vm.$options.name==='g-tabs-head'){
        vm.$children.forEach((childvm)=>{
          if (childvm.$options.name==='g-tabs-items' && childvm.name===this.selected){
            this.eventBus.$emit('update:selected',this.selected,childvm)

          }

        })

      }
    })

  }

}
</script>

<style scoped>

</style>
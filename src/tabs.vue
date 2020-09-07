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
    this.$children.forEach((vm)=>{
      if (vm.$options.name==='g-tabs-head'){
        vm.$children.forEach((item)=>{
          console.log('-----')
          console.log( item.name)
          console.log(item.$el)
          console.log(this.selected)
          if (item.$options.name==='g-tabs-item'&& item.name===this.selected){}
        this.eventBus.$emit('update:selected',this.selected,item)
        })

      }
    })

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
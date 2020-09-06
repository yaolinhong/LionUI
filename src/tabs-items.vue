<template>
  <div class="tabs-item" @click="xxx"></div>
  <slot/>
</template>

<script>
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:[String,Number],
      required:true
    }
  },
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      console.log(name)
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
}

}
</script>

<style scoped>

</style>
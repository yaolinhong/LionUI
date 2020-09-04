<template>
  <div class="sider" v-if="visible">
    <button class="close" @click="visible=false" >x</button>
    <slot/>
  </div>
</template>
<script >
export default {
  data(){
    return {visible:true}
  },
  methods(){

  }
}
</script>
<style lang="scss">
.sider{
  position:relative;
}
.close{
  position:absolute;
  right: 0;
}
</style>
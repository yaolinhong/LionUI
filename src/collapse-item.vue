<template>
<div class="collapseItem">
  <div class="title" @click="showContent">
    {{title}}
  </div>
  <div class="content" v-if="selected"><slot></slot></div>
</div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      selected:false
    }
  },
  methods:{
    showContent(){this.selected=!this.selected;}
  }
}

</script>

<style lang="scss" scoped>
.collapseItem {

}
  .content{
    margin: 0px -1px;
    border-bottom: 1px solid black;
  }
.title{
  margin: 0px -1px;
  border-bottom: 1px solid black;

}
</style>
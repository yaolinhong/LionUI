<template>
  <div class="collapse">
    <g-collapse :selected-tag.sync="selectedTag">
      <g-collapse-item title="title1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="title2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="title3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <br>
    single（只展示一个内容）
    <g-collapse :selected-tag.sync="selectedTag" :single="true" >
      <g-collapse-item title="title1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="title2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="title3" name="3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
name: "collapse",
  components:{
  'g-collapse':Collapse,
    'g-collapse-item':CollapseItem
  },
  data(){
  return{
    selectedTag : '2'
  }
  }
}
</script>

<style lang="scss" scoped>

</style>
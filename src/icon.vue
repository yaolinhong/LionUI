<template>
  <svg class="g-icon">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>
<script>
import "./svg"
export default {
  name:"g-icon",
  props:['name'],

}
</script>
<style lang="scss" scoped>
.g-icon{
  height: 1em;width: 1em;
}
</style>
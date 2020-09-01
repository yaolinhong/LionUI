<template>
  <div class="wrapper">  <input type="text">
  </div>
</template>
<script>
export default {
  name:"g-input"

}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color:#999;
.wrapper{
  >input{
    height: 32px;
    border: 1px solid $border-color;
  }
}

</style>
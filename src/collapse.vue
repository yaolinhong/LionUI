<template>
<div class="collapse">
  <slot></slot>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.collapse {
  display: flex;
  flex-direction: column;
  max-width: 20em;

  &:first-child{
    border: 1px solid black;
    border-top-left-radius:4px ;
    border-top-right-radius:4px ;
  }
  &:last-child{
    border-bottom: 0;
  }
}
</style>
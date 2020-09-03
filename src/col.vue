<template>
  <div class="col"
       :class="[span && `col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border: 1px solid white;
                background-color: #666666;
                height: 100px">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    span: [String, Number],
    offset: [String, Number],
    phone: {
      type: Object, validator(value) {
      }
    }
    //phone的值只能是span或者offset ，抽象化：一个数组必须包含再另一个数组里面
    //遍历phone上面的key 看是否再['span','offset']
  },
  data() {
    return {
      gutter: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  margin-top: 20px;

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }

  }
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }

  }

}
</style>
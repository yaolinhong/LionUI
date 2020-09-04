<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  console.log(keys)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false;
    }
  })
  return valid
}
//验证OBJ的key在不在以上两个之内；
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator},
  },
  //phone的值只能是span或者offset ，抽象化：一个数组必须包含再另一个数组里面
  //遍历phone上面的key 看是否在['span','offset']
  data() {
    return {
      gutter: 0}
  },
  methods: {
    createClasses(obj, str = '') {
      //str='' 给一个默认值为空；
      if (!obj) {
        return []
      }
      let arr1 = []
      if (obj.span) {
        arr1.push(`col-${str}${obj.span}`)
      }
      if (obj.offset || obj.offset === 0) {
        //如果offset=0
        arr1.push(`offset-${str}${obj.offset}`)
      }
      return arr1
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      let createClasses = this.createClasses
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
        //驼峰命名；原先传入的中缀错误，导致获取不到el元素
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>
<style lang="scss">
.col {
  $class-prefix: col-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) { // 770
    $class-prefix: col-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readOnly="readOnly"
           @change="$emit('value',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <g-icon class="icon-error" name="warning"></g-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon"
export default {
  name: "g-input",
  components: {'g-icon': Icon},
  props: {
    value: {type: String},
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  methods:{

    }

}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$red: #F1453D;
$font-size: 12px;

.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: .5em;
  }

  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px;
      outline: none
    }

    &[disabled], &[readOnly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }
}


</style>
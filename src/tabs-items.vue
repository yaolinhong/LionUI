<template>
  <div class="tabs-item" @click="onclick" :class="classes">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <slot></slot>

  </div>

</template>

<script>
import Icon from "./icon.vue"

export default {
  data() {
    return {
      active: false
    }
  },
  inject: ['eventBus'],
  components: {
    'g-icon': Icon
  },
  props: {
    icon: {},
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.eventBus.$on('update:selected',
        (selected) => {
          this.active = selected === this.name;
        })
  },
  methods: {
    onclick() {
      if (this.disabled){return null}
      this.eventBus.$emit('update:selected',this.name,this)
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled: this.disabled

      }
    }
  }

}
</script>

<style lang="scss" scoped>
$blue:blue;
$disabled-text-color:grey;
.tabs-item {
  flex-shrink: 0;
  height: 100%;
  padding: 0 2em;
  cursor:pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &.active{
    color: $blue;
  }
&.disabled{
  color:$disabled-text-color ;
}
}

</style>
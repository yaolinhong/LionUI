<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <slot/>

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
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  computed:{
    classes(){
      return {active:this.active}
    }
  }

}
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  &.active{
    background-color:red;
  }
}

</style>
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    selectedTag: {
      type: String,
    },
    single: {
      default: false,
    }
  },
  data() {
    return {
      mySelectedTag: {type: String},
      eventBus: new Vue()
    }
  },
  provide() {
    return {eventBus: this.eventBus}
  },

  methods: {
    updateSelectedTag(selectedName) {
      this.mySelectedTag = selectedName
      this.$emit('update:selectedTag', selectedName)
    },
    singleToggle() {
      if (this.single === true) {
        this.eventBus.$on('update:selectedTag', this.updateSelectedTag)
      }
    }
  },
  mounted() {
    this.eventBus.$emit('update:selectedTag', this.selectedTag)
    this.singleToggle();

  }
}
</script>

<style lang="scss" scoped>
.collapse {
  display: flex;
  flex-direction: column;
  max-width: 20em;
  border: 1px solid black;
  border-radius: 4px;
}
</style>
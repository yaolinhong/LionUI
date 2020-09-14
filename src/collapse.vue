<template>
  <div class="collapse">
    {{ selectedTag }}
    <slot></slot>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  props: {
    selectedTag : {
      type: String,
    },
    single:{
      default:false,
    }
  },
  data() {
    return {
      mySelectedTag: {type:String},
      eventBus: new Vue()
    }
  },
  provide() {
    return {eventBus: this.eventBus}
  },

  methods: {
    showContent(selectedName) {
      this.mySelectedTag=selectedName
      this.$emit('update:selectedTag',selectedName)
    },
    singleToggle(){
      if(this.single===true){
      this.eventBus.$on('update:selectedTag', this.showContent)
    }}
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
<template>
  <div class="collapseItem">
    <div class="title" @click="showContent">
      {{ title }}
    </div>
    <div class="content" v-if="mySelected">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    selectedTag: {
      type: String
    },
    name: {type: String}
  },

  data() {
    return {mySelected: false}
  },
  inject: ['eventBus'],
  methods: {
    showContent() {
      if (this.$parent.single===true){this.eventBus.$emit('update:selectedTag', this.name)

      }else {this.mySelected=!this.mySelected}
    },
  },
  mounted() {
    if (this.$parent.single===true){
      this.eventBus.$on('update:selectedTag', (selectedTag) => {
        this.mySelected = selectedTag === this.name;})}
  }
}

</script>

<style lang="scss" scoped>
.collapseItem {
  .content {
    margin-left: -1px;
    border-bottom: 1px solid black;
    padding-left: 1em;

  }

  .title {
    padding-left: 0.5em;
    margin-left: -1px;
    margin-bottom: -1px;
    border-bottom: 1px solid black;
  }

  &:last-child :last-child {
    border-bottom: 0;
  }

}

</style>
<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
/*
  Because vue3 is not compatible with better scroll2 
  this component can only use js temporarily
*/
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  props: {
    top: {
      type: Number,
      default: 0
    }
  },
  methods: {
    initScroll() {
      this.$refs.wrapper.style.top = this.top + 'px'
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  },
  /*
    Most of the time, we use the mounted hook, 
    but using the mounted hook here will cause the initialization method to be called 
    before the component is loaded, and eventually it cannot be scrolled
    so here we use the updated hook, there may be some unexpected problems
  */
  updated() {
    this.initScroll()
  }
}
</script>
<style lang='scss'>
  .wrapper {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
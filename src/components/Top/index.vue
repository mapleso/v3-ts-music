<template>
  <div class="top">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
});
</script>
<style lang='scss'>
  .top {
    box-sizing: border-box;
    width: 100vw;
    height: 48px;
    padding: 10px;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // text-align: cen;
    .center {
      font-weight: 700;
      font-size: 20px;
    }
    .left, .center, .right {
      text-align: center;
      color: #409EFF;
      // position: relative;
      float: left;
    }
   
  }
</style>
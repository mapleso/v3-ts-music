<template>  
  <div class="item-area" v-for="item in itemList">
    <div class="left clearfix">
      <img :src="item.cover" alt="">
    </div>
    <div class="right">
      <span style="display: block; fontSize: 14px; color: #333333;marginTop: 4px; ">{{ item.title }}</span><br />
      <span style="fontSize: 14px; color: #999999;">{{ item.username }}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Items',
  props: {
    itemList: {
      type: Array,
      required: true
    }
  }
});
</script>
<style lang='scss'>
 .item-area {
   box-sizing: border-box;
   width: 100vw;
   height: 10vh;
   padding: 10px 15px 0;
   .left {
     float: left;
     margin-right: 20px;
     img {
       width: 60px;
       height: 60px;
     }
    .right {
      float: right;
      margin-left: 10px;
    }
   }
 }
</style>
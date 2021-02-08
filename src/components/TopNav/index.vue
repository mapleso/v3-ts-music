<template>
  <div class="top-nav">
    <router-link 
      class="link" 
      :to="item.path" 
      active-class="active" 
      v-for="item in navList" :key="item.id">
    {{ item.title }}</router-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopNav',
  props: {
    navList: {
      type:Array,
      required: true
    }
  }
});
</script>
<style lang='scss'>
 .top-nav {
   box-sizing: border-box;
   padding: 10px 0;
   display: flex;
   justify-content: space-around;
  //  color: #969799;
   background: #fafafa;
   .link {
     flex-grow: 1;
     text-align: center;
   }
 }
 .active {
   color: #409EFF;
   font-weight: bold;
 }
</style>
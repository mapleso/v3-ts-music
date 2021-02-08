<template>
  <div class="singer-list">
    <ul>
      <li v-for="item of singerList" :key="item.singer_id">
        <img :src="item.singer_pic">        
        <div class="info">
          <p class="title">
            <span class="name">{{item.singer_name}}</span>
            <!-- <span class="like">{{}}</span> -->
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SingerList',
  props: {
    singerList: {
      type: Array
    },
    
  }
});
</script>
<style lang='scss'>
  .singer-list {
    box-sizing: border-box;
    padding: 0 20px;
    li {
      display: flex;
      padding-bottom: 15px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        .title {
          color: #999;
          margin-top: 15px;
        }
      }
    }
  }
</style>
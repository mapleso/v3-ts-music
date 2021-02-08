<template>
  <div class="search-hot">
    <h1 class="hot-title">热门搜索</h1>
    <ul>
      <li class="item" v-for="item in hotSongList" :key="item.n">
        <span>{{ item.k }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SearchHot',
  props: {
    hotSongList: {
      type: Array,
      required: true
    }
  }
});
</script>
<style lang='scss'>
  .hot-title {
    font-family: "";
    font-size: 14px;
    margin-top: 30px;
    color: #999999; 
  }
  .item {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    font-size: 14px;
    color: #409EFF;
    background: #f0f0f0;

  }
</style>
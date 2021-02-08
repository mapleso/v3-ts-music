<template>
  <div class="mv-list">
    <ul>
      <li
        v-for="item in mvList"
      >
      <img :src="item.picurl" alt="">
      <p class="name">{{ item.mvtitle }}</p>
      <p class="singer">{{ item.singer_name }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MvList',
  props: {
    mvList: {
      type: Array,
      required: true
    }
  }
});
</script>
<style lang='scss'>
  .mv-list {
    height: 100%;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 45vw;
        margin: 10px 2%;
        box-sizing: border-box;
        border-radius: 5px;
        background: #f0f0f0;
        img {
          width: 100%;
          height: 100px;
        }
        .name {
          height: 30px;
          padding: 0 5px;
          font-size: 14px;
        }
        .singer {
          font-size: 14px;
          margin-top: 4px;
          padding: 5px;
          color: #999999;
        }
      }
    }
  }
</style>
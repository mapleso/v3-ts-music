<template>
  <div class="search-result">
    <ul v-for="dataObj of searchList">
      <li v-for="item in dataObj.itemlist">
        <i class="icon" :class="iconClass(dataObj.type)" ></i>
        {{ item.name }} ------ {{ item.singer }}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'SearchResult',
  props: {
    searchList: {
      type: Object,
      required: true
    }
  },
  setup() {
    const iconClass = (type: number) => {
      if(type === 4) {
        return 'el-icon-video-play'
      }else if(type === 2) {
        return 'el-icon-user'
      }else if(type === 1) {
        return 'el-icon-headset'
      }
    }
    return { iconClass }
  }
});
</script>
<style lang='scss'>
  .search-result {
    margin-top: 10px;
    ul {
      padding: 0 5px;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 10px;
        font-size: 14px;
        color: #409eff;
        background: #f0f0f0;
        border-radius: 15px;
        .icon {
          margin-right: 15px;
          font-size: 16px;
        }
      }
    }
  }
</style>
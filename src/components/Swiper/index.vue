<template>
  <el-carousel 
    class="swiper-area" 
    indicator-position="none" 
    height="150px"
    >
    <el-carousel-item 
      v-for="item in swiperList"
      >
      <img :src="item.picUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Swiper', 
  components: {  },
  props: {
    swiperList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {  }
  }
});
</script>
<style lang='scss'>
  .swiper-area {
    margin: 0px 3px 5px;
    border-radius: 15px;
    overflow: hidden;
    // height: 150px;
  }
  img {
    width: 100vw;
    // height: 150px;
  }
  .el-carousel__arrow {
    display: block !important;
  }
</style>
<template>
  <scroll :top="85">
    <div class="recommend">
      <img-swiper :swiperList ='banner_data' />
      <h1 class="list-title">热门歌单推荐</h1>
      <items :itemList ="song_data" />
    </div>
  </scroll>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import ImgSwiper from '@/components/Swiper/index.vue'
import Items from './Items.vue'
import { getSwiper, getSongList } from '@/api/recommend'
import Scroll from '@/components/Scroll/Scroll.vue';

export default defineComponent({
  name: 'Recommend',
  components: { ImgSwiper, Items, Scroll },
  setup() {
    const state = reactive({
      banner_data: [],
      song_data: []
    })

    onMounted(async () => {
      const { data:{ data: banner_data } } = await getSwiper()
      state.banner_data = banner_data

      const { data:{ data: { list: song_data } } } = await getSongList()
      state.song_data = song_data
      // console.log(song_data);
    })

    return { ...toRefs(state) }
  }
});
</script>
<style lang='scss'>
.list-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #409eff;
}
</style>
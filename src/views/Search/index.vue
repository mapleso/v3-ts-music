<template>
  <scroll :top="85">
    <div class="search">
      <search-input @searchInput ="searchData" />
      <search-hot v-show="show" :hotSongList = "hot_data" />
      <search-result v-show="!show" :searchList = 'search_data' />
    </div>
  </scroll>
  
</template>

<script lang='ts'>
import Scroll from '@/components/Scroll/Scroll.vue';

import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import SearchHot from './SearchItem/SearchHot.vue';
import SearchInput from './SearchItem/SearchInput.vue';

import { getHotSong, searchResult } from '@/api/search'
import SearchResult from './SearchItem/SearchResult.vue';
export default defineComponent({
  components: { Scroll, SearchInput, SearchHot, SearchResult },
  name: 'Search',
  setup() {
    const state = reactive({
      hot_data: [],
      search_data: {},
      show: true
    })

    const hotData = async () => {
      const { data: { data: hot_data } } = await getHotSong()
      state.hot_data = hot_data
    }

    const searchData = async (params: string, flag: boolean) => {
      //只有有参数,才会发请求
      state.show = flag
      state.search_data = {}
      if(params) {
        const { data: { data: search_data }} = await searchResult(params)
        // console.log(search_data);
        delete search_data.album
        state.search_data = search_data
      }
      // console.log(flag);
    } 

    onMounted(() => {
      hotData()
    })

    return { ...toRefs(state), searchData }
  }
});
</script>
<style lang='scss'>
  .search {
    // margin-top: 95px;
    // margin: 0 20px;
    margin: 10px 20px 0;
    // margin-top: 10px;
  }
</style>
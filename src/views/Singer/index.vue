<template>
  <singer-category :categoryList = "category_data" @singerListData = "singerListData" />
  <scroll :top="240">
    <singer-list :singerList = "singer_list_data"  />
  </scroll>
  
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { getCategory, getSingerList } from '@/api/singer'
import SingerCategory from './SingerItem/SingerCategory.vue';
import SingerList from './SingerItem/SingerList.vue';
import Scroll from '@/components/Scroll/Scroll.vue';
export default defineComponent({
  components: { SingerCategory, SingerList, Scroll },
  name: 'Singer',
  setup() {
    const state = reactive({
      category_data: null,
      singer_list_data: []
    })

    const categoryData = async () => {
      const { data: { data: category_data } } = await getCategory()
      delete category_data.index
      state.category_data = category_data
      // console.log(category_data);
    }

    const singerListData = async (params: any) => {
      const { data: { data: singer_list_data } } = await getSingerList(params)
      delete singer_list_data.index
      state.singer_list_data = singer_list_data.list
    }
    
    onMounted(() => {
      categoryData()
      singerListData('')
    })
    
    return { ...toRefs(state), singerListData }
  }
});
</script>
<style lang='scss'>
</style>
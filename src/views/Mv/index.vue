<template>
  <tab :tabList = 'tabList' @mvData = 'mvData' />
  <scroll :top="120">
    <div>
      <mv-list :mvList = "mv_data" />
    </div>
  </scroll>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getMv } from '@/api/mv'
import Scroll from '@/components/Scroll/Scroll.vue';
import Tab from './MvItem/Tab.vue';
import MvList from './MvItem/MvList.vue';

export default defineComponent({
  components: { Scroll, Tab, MvList },
  name: 'Mv',
  setup() {
    const state = reactive({
      tabList: [
        {name: '精选', id:0},{name: '内地', id:1},
        {name: '港台', id:2},{name: '欧美', id:3},
        {name: '韩国', id:4},{name: '日本', id:5},
      ],
      mv_data: []
    })

    const mvData = async (type: number) => {
      const { data: { data: { list: mv_data }} } = await getMv(type)
      state.mv_data = mv_data
    }

    onMounted(() => {
      mvData(0)
    })

    return { ...toRefs(state), mvData }
  }
});
</script>
<style lang='scss'>
 
</style>
<template>
  <div class="fixed">
    <top>
      <template #left>
        <i class="el-icon-setting icon-none" />
      </template>
      <template #center>{{title}}</template>
      <template #right>
        <i class="el-icon-search icon"  @click="router.push({path: '/homepage/search'})" />
      </template>
    </top>
    <top-nav :navList = navList />
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Top from '@/components/Top/index.vue'
import TopNav from '@/components/TopNav/index.vue'
import router from '@/router/index.ts'
import { navTitle } from '@/types/navTitle' 

export default defineComponent({
  name: 'HomePage',
  components: { Top, TopNav },
  setup() {
    const title: string = 'My Web Music'
    const navList: navTitle []  = [
      {title:'推荐', path: '/homepage/recommend',id: 1},
      {title:'歌手', path: '/homepage/singer', id: 2},
      {title:'排行', path: '/homepage/rank', id: 3},
      {title:'MV', path: '/homepage/mv', id: 4}
    ]
    return { title, navList, router }
  }
});
</script>
<style lang='scss'>
  .icon {
    font-size: 24px;
  }
  .icon-none {
    color: #f0f0f0;
  }
  .fixed {
    position: fixed;
    top: 0;
    z-index: 11;
  }
</style>
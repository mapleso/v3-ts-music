<template>
  <el-input
    size="medium"
    placeholder="请输入搜索内容"
    v-model="searchContent" >
    <template #prefix>
      <i class="el-input__icon el-icon-search"></i>
    </template>
  </el-input>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'SerachInput',
  emits: ['searchInput'],
  setup(props,ctx) {
    const searchContent = ref('')

    let timer: any = null

    watch(searchContent, () => {
      if(timer) clearTimeout(timer)
      searchContent.value ? 
      timer = setTimeout(() => { ctx.emit('searchInput',searchContent.value,false) },500) :
      ctx.emit('searchInput','',true) 
    })
    
    return { searchContent }
  }
});
</script>
<style lang='scss'>
</style>
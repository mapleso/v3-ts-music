<template>
  rank
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import { getRank } from '@/api/rank'

export default defineComponent({
  name: 'Rank',
  setup() {
    const rankData = async () => {
      const res = await getRank()
      console.log(res);
      
    }

    onMounted(() => {
      rankData()
    })
  }
});
</script>
<style lang='scss'>
</style>
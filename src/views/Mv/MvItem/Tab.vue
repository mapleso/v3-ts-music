<template>
  <div class="tab-list">
    <div class="tabs">
      <div class="tab" 
        v-for="item in tabList"
        @click="changeTab(item.id)" 
        :class="active.index === item.id ? 'active' : ''" 
      >{{ item.name }}</div>
    </div>
  </div>
  
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Tab',
  props: {
    tabList: {
      type: Array
    }
  },
  emits: [ 'mvData' ],
  setup(props,ctx) {
    const active = reactive({
      index: 0
    })

    const changeTab = (type: number) => {
      active.index = type
      ctx.emit('mvData',type)
    }
    return { active, changeTab }
  }
});
</script>
<style lang='scss'>
.tab-list {
  position: fixed;
  margin-top: 85px ;
  .tabs {
    background-color: #f9f9e0;
    padding: 5px 0;
    width: 100vw;
    height: 30px;
    display: flex;
    line-height: 30px;
    justify-content: space-around;
    font-size: 15px;
    color: #999;
  }
}
</style>
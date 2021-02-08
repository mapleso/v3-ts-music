<template>
  <div class="singer-categoty">
    <div v-for="(item,key) of categoryList" :key="key">
      <ul>
        <li v-for="(child,index) in item" :key="child.id" @click="showDetail(key, index)" :class="activeIndex[key] === index ? 'item-active' : ''">
          {{ child.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'SingerCategory',
  props: {
    categoryList: {
      type: Object,
      required: true
    }
  },
  emits: ['singerListData'],
  setup(props,ctx) {
    const activeIndex: any = reactive({
      sex: 0,
      genre: 0,
      area: 0
    })
    const showDetail = (key: any, index: number) => {
      activeIndex[key] = index
      const params: any = {}
      Object.getOwnPropertyNames(activeIndex).map(() => {
        params[key] = props.categoryList[key][activeIndex[key]].id
        return params
      })
      ctx.emit('singerListData',params)
    }

    return { showDetail, activeIndex }
  }
});
</script>
<style lang='scss'>
 .singer-categoty{
   margin-top: 85px;
   padding: 10px 10px 0 10px;
  //  margin-bottom: 50px;
   position: fixed;
   background-color: white;
   z-index: 11;
   ul {
     display: flex;
     flex-wrap: wrap;
     li {
       list-style: none;
       padding: 5px;
       margin: 5px;
       font-size: 12px;
       text-align: center;
       color: #999999;
     }
     
   }
 }
  .item-active {
    border-radius: 5px;
    color: #ffffff !important;
    background-color: #409EFF;
  }
</style>
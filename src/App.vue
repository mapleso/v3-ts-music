<template>
  <router-view />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App'
})
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body, html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>

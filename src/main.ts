import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ElIcon, ElCarousel, ElCarouselItem, ElInput } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


import './assets/css/normalize.css'

createApp(App).use(ElIcon).use(ElCarousel).use(ElInput).use(ElCarouselItem).use(store).use(router).mount('#app')

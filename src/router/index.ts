import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: () => import('@/views/HomePage/index.vue'),
    children: [
      {
        path: '/homepage',
        redirect: '/homepage/'+'recommend'
      },
      {
        path: '/homepage/'+'recommend',
        meta: {
          keepAlive: true
        },
        component: () => import('@/views/Recommend/index.vue')
      },
      {
        path: '/homepage/'+ 'rank',
        component: () => import('@/views/Rank/index.vue')
      },
      {
        path: '/homepage/' +'search',
        component: () => import('@/views/Search/index.vue')
      },
      {
        path: '/homepage/' +'mv',
        component: () => import('@/views/Mv/index.vue')
      },
      {
        path: '/homepage/' +'singer',
        component: () => import('@/views/Singer/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

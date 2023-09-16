import { createRouter, createWebHistory } from 'vue-router'

// 当需要登录时启用
// import Cookies from 'js-cookie'

const history = createWebHistory()

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/Product.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/News.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/About.vue'),
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/views/join/Join.vue'),
  },
]
const router = createRouter({
  history,
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'login') {
//     next()
//     return
//   }
//   // 登录验证
//   if (!Cookies.get('accessToken')) {
//     next({
//       path: '/login'
//     })
//     return
//   }
//   next()
// })

export default router

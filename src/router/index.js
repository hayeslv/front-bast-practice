/*
 * @Author: Lvhz
 * @Date: 2020-04-12 14:54:11
 * @Descripttion: 
 */
import Vue from 'vue';
import Router from 'vue-router'; // npm i vue-router -S
import Detail from '@/view/routerUse/detail.vue';

Vue.use(Router);





const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/view/modifier/index.vue')
  },
  {
    // 修饰符
    name: 'vueModifier',
    path: '/vueModifier',
    component: () => import('@/view/modifier/index.vue')
  },
  {
    // vue使用
    name: 'use',
    path: '/use',
    component: () => import('@/view/use/index.vue')
  },
  {
    // css使用
    name: 'cssUse',
    path: '/cssUse',
    component: () => import('@/view/cssUse/index.vue')
  },
  {
    // route使用
    name: 'routeUse',
    path: '/routeUse',
    meta: { auth: true }, // 自定义属性--需要认证
    beforeEnter(){}, // 路由级守卫
    component: () => import('@/view/routerUse/index.vue'),
    children: [
      { 
        path: '/detail/:id', 
        component: Detail,
        props: true, // 这里设置为true，则id会以props属性的方式传入
      }
    ]
  }
]

console.log(process.env.VUE_APP_BASEURL);

const router = new Router({
  mode: 'history',
  // base: process.env.VUE_APP_BASEURL,
  routes: constantRouterMap
});

// 全局守卫
router.beforeEach((to, from, next) => {
  to.meta.auth && (alert('验证登录'))
  next()
})

export default router


/*
 * @Author: Lvhz
 * @Date: 2020-04-12 14:54:11
 * @Descripttion: 
 */
import Vue from 'vue';
import Router from 'vue-router'; // npm i vue-router -S

Vue.use(Router);

const constantRouterMap = [
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
    path: '/',
    component: () => import('@/view/modifier/index.vue')
  }
]

console.log(process.env.VUE_APP_BASEURL);
export default new Router({
  base: process.env.VUE_APP_BASEURL,
  mode: 'hash',
  routes: constantRouterMap
});


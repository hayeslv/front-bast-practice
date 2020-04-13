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
    path: '/',
    component: () => import('@/view/modifier/index.vue')
  }
]

export default new Router({
  // base: process.env.VUE_APP_BASEURL,
  mode: 'hash',
  routes: constantRouterMap
});


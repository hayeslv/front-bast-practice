/*
 * @Author: Lvhz
 * @Date: 2020-04-23 21:21:49
 * @Descripttion: vue-router调用
 */

import Vue from 'vue'
import use from '@/view/use'
import CssUse from '@/view/cssUse'
import VueRouter from './kvue-router.js'

// 插件注册
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: use },
    { path: '/use', component: use },
    { path: '/cssUse', component: CssUse }
  ]
})


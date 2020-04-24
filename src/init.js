import Vue from 'vue';
import App from './App.vue';
// import router from '@/router';
import router from '@/router/krouter.js'

const renderPage = {
  // ErrorPage,
  App,
  // SuggestPage
}

/**
 * 初始化Vue
 *
 * @param {string} pageName 需要初始化的组件名称
 */
function initVue(pageName = 'App'){
  new Vue({
    el: "#app",
    router,
    render: h => h(renderPage[pageName])
  })
}

// 初始化App页面
function initApp(){
  initVue('App')
}

export default {
  initApp
}
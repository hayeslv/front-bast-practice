/*
 * @Author: Lvhz
 * @Date: 2020-04-23 22:10:44
 * @Descripttion: vue-router源码实现
 */


let Vue;

class VueRouter{
  constructor(options){
    this.options = options;

    // 创建一个路由path和route映射
    this.routeMap = {};

    // 将来当前路径current需要响应式
    // 利用Vue的响应式原理可以做到这一点
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  init(){
    // 绑定浏览器事件
    this.bindEvents();

    // 解析路由配置
    this.createRouteMap(this.options);

    // 创建router-link和router-view
    this.initComponent();
  }

  bindEvents(){
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }

  onHashChange(){
    // http://localhost:8080/#/hash
    this.app.current = window.location.hash.slice(1) || '/'
  }

  createRouteMap(options){
    options.routes.forEach(item=>{
      // ['/home': {path: '/home', component: Home}]
      this.routeMap[item.path] = item;
    })
  }

  initComponent(){
    // 声明两个全局组件
    Vue.component('router-link', {
      props: {
        to: String
      },
      render(h){
        // 目标是：<a :href="to">xxx</a>
        // return <a href={this.to}>{this.$slots.default}</a>
        return h('a', { attrs: {href: '#'+this.to} }, this.$slots.default)
      }
    })

    // hash => current => render
    Vue.component('router-view', {
      // 箭头函数保留this指向，这里指向的是VueRouter实例
      render: (h) => {
        const Comp = this.routeMap[this.app.current].component
        return h(Comp)
      }
    })
  }
}

// 把VueRouter变成插件
VueRouter.install = function(_Vue){
  // 这里保存，上面使用
  Vue = _Vue;

  // 混入
  Vue.mixin({
    beforeCreate() {
      // 这里的代码将来会在外面初始化的时候被调用
      // 这样我们就实现了Vue的扩展
      // 这里只希望根组件执行一次
      if(this.$options.router){
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  })
}

export default VueRouter

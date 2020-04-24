<!--
 * @Author: Lvhz
 * @Date: 2020-04-22 22:40:01
 * @Descripttion: 
 -->
全局钩子：beforeEach  
路由级钩子：beforeEnter  
组件级钩子：beforeRouteEnter  

### 动态路由  
利用$router.addRoutes()可以实现动态路由添加，常用于用户权限控制
```javascript
// 后端返回的数据可能是这样的：
// [{
//   path: '/',
//   name: 'home',
//   component: 'Home'
// }]
// 异步获取路由
api.getRoutes().then(routes => {
  const routeConfig = routes.map(route => mapComponent(route))
  router.addRoutes(routeConfig)
})

// 映射关系
const compMap = {
  'Home': () => import("./view/Home.vue")
}

// 递归替换
function mapComponent(route){
  route.component = compMap[route.component]
  if(route.children){
    route.children = route.children.map(child => mapComponent(child))
  }
  return route
}
```  

### 面包屑  
利用$route.matched可得到路由匹配数组，按顺序解析可得路由层级关系。  
```javascript
watch: {
  $route: {
    handler: function(newVal, oldVal){
      // [{ name: 'home', path: '/' }, { name: 'list', path: '/list' }]
      console.log(this.$route.matched);
      // 可以拿出 ['home', 'list']
      this.crumbData = this.$route.matched.map(m=>m.name);
    },
    immediate: true
  }
}
```
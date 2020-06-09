<!--
 * @Author: Lvhz
 * @Date: 2020-04-23 21:26:11
 * @Descripttion: vue-router源码实现
 -->

```javascript
// 通常用法
import Home from './view/Home.vue';
import About from './view/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', components: Home },
    { path: '/about', components: About }
  ]
})

// 在main.js中
import router from './kRouter.js'
```

### 主要任务  

* 要解析routes配置，变成一个key为path，value为component的map
* 要能监控url变化事件，把最新的hash值保存到current路由
* 要定义两个全局组件：router-view用于显示匹配组件内容，router-link用于修改hash
* current应该是响应式的，这样可以触发router-view的重新渲染
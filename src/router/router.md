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
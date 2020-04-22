/*
 * @Author: Lvhz
 * @Date: 2020-04-21 22:15:02
 * @Descripttion: 创建指定的组件实例并挂载于body上（服务弹窗组件）
 */
import Vue from 'vue';
export default function create(Component, props){
  // 0、先创建vue实例
  const vm = new Vue({
    render(h){
      // render方法提供给我们一个h函数，它可以渲染vNode
      return h(Component, {props})
    }
  }).$mount() // 这里先不挂载
  
  // 1、上面的vm帮我们创建了组件实例

  // 2、通过$children获取该组件实例
  console.log(vm.$root);
  const comp = vm.$children[0]

  // 3、追加至body
  document.body.appendChild(comp.$el)

  // 4、清理函数
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    vm.$destroy()
  }

  // 5、返回组件实例
  return comp
}
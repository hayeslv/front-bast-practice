<!--
 * @Author: Lvhz
 * @Date: 2020-04-22 20:51:15
 * @Descripttion: 树组件
 -->
<template>
  <div id="app">
    <ul>
      <Node class="item" :model="treeData"></Node>
    </ul>
  </div>
</template> <script>
import Node from "./Node.vue";
export default {
  name: "app",
  data() {
    return {
      treeData: {
        title: "Web全栈架构师",
        children: [
          { title: "Java架构师" },
          {
            title: "JS⾼高级",
            children: [{ title: "ES6" }, { title: "动效" }]
          },
          {
            title: "Web全栈",
            children: [
              {
                title: "Vue训练营",
                expand: true,
                children: [
                  { title: "组件化" },
                  { title: "源码" },
                  { title: "docker部署" }
                ]
              },
              {
                title: "React",
                children: [{ title: "JSX" }, { title: "虚拟DOM" }]
              },
              { title: "Node" }
            ]
          }
        ]
      }
    };
  },
  components: { Node }
};
</script>


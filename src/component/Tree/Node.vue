<!--
 * @Author: Lvhz
 * @Date: 2020-04-22 20:51:04
 * @Descripttion: 递归组件是可以在它们自己模板中调用自身的组件
 -->
<template>
  <li>
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <Node class="node" v-for="model in model.children" :model="model" :key="model.title"></Node>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Node', // name对递归组件是必要的
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      open: false // 打开状态
    }
  },
  computed: {
    isFolder(){ // 是否有子树
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle(){
      if(this.isFolder){
        this.open = !this.open
      }
    }
  }
};
</script>

<style scoped>

</style>

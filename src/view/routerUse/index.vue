<!--
 * @Author: Lvhz
 * @Date: 2020-04-22 22:10:32
 * @Descripttion: 
 -->
<template>
  <div>
    <h2>route</h2>
    <router-link to="/detail/1">to detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(){ }, // 组件级钩子
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>

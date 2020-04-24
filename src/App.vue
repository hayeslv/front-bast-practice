<!--
 * @Author: Lvhz
 * @Date: 2020-04-12 09:33:45
 * @Descripttion: 
 -->
<template>
  <div>
    <router-link to="/use">use</router-link>
    <router-link to="/cssUse">cssuse</router-link>
    <router-view></router-view>
    <!-- <ETree></ETree> -->
  </div>
</template>

<script>
// import ETree from '@/component/Tree'
export default {
  name: 'app',
  // components: {
  //   ETree
  // },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>

</style>

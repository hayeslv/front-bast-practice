<!--
 * @Author: Lvhz
 * @Date: 2020-04-22 22:14:02
 * @Descripttion: 
 -->
<template>
  <div>
    detail
    <!-- $route.params.id -->
    <p>id: {{id}}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>

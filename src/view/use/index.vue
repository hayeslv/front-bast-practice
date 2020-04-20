<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 20:56:08
 * @Descripttion: vue的使用方式
 -->
<template>
  <div>
    <!-- 插槽使用 -->
    <ESlot>
      <template v-slot:default>匿名插槽</template>
      <!-- 从子组件中传出来 -->
      <template v-slot:content="{bla}">具名插槽{{bla}}</template>
    </ESlot>
  </div>
</template>

<script>
import ESlot from './slot.vue';
export default {
  components: {
    ESlot
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>

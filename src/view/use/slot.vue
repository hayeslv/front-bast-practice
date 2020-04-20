<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 20:57:22
 * @Descripttion: 
 -->
<template>
  <div>
    111
    <div>
      <slot></slot>
    </div>
    222
    <div>
      <slot name="content" bla="bla~~!!!"></slot>
    </div>
    333
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>

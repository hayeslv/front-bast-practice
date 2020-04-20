<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 21:47:14
 * @Descripttion: 
 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  data() {
    return {
    };
  },
  methods: {
    validate(cb) {
      // map的结果是若干个Promise数组
      const tasks = this.$children
        .filter(item=>item.prop)
        .map(item=>item.validate())
      Promise.all(tasks)
        .then(()=>cb(true))
        .catch(()=>cb(false))
    }
  }
};
</script>

<style scoped>

</style>

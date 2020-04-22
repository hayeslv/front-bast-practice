<!--
 * @Author: Lvhz
 * @Date: 2020-04-21 21:58:25
 * @Descripttion: checkbox实现v-model：v-model通常用于表单控件，它有默认行为，同时属性名和事件名均可在子组件定义
 -->
<template>
  <div>
    <input type="checkbox" :checked="checked" @change="onChange">
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    onChange(e){
      this.$emit('change', e.target.checked)
    }
  }
};
</script>

<style scoped>

</style>

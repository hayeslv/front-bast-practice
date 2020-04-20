<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 21:16:05
 * @Descripttion: 
 -->
<template>
  <div>
    <!-- 自定义组件要实现v-model必须实现 :value @input -->
    <input :value="value" @input="onInput" v-bind="$attrs">
     <!-- v-on="$listeners" -->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    };
  },
  methods: {
    onInput(e){
      this.$emit('input', e.target.value);

      // 通知FormItem校验
      this.$parent.$emit('validate')
    }
  }
};
</script>

<style scoped>

</style>

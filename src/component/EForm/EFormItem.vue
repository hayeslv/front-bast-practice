<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 21:40:49
 * @Descripttion: 
 -->
<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator' // npm i async-validator -S
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  inject: ['form'],
  data() {
    return {
      errorMessage: ''
    };
  },
  mounted(){
    // 监听校验事件
    this.$on('validate', ()=>{
      this.validate()
    })
  },
  methods: {
    validate(){
      // 执行组件校验
      // 1、获取校验规则
      const rules = this.form.rules[this.prop]
      // 2、获取数据
      const value = this.form.model[this.prop]
      // 3、执行校验
      const desc = {
        [this.prop]: rules
      }
      const schema = new Schema(desc)
      // 参数1是值，参数2是校验错误对象数组
      return schema.validate({ [this.prop]: value }, errors=>{
        if(errors){
          this.errorMessage = errors[0].message
        }else{
          this.errorMessage = ''
        }
      })
    }
  }
};
</script>

<style scoped>

</style>

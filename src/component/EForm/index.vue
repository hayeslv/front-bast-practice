<!--
 * @Author: Lvhz
 * @Date: 2020-04-20 21:11:46
 * @Descripttion: ele-form表单
 * Form：管理数据模型-model、校验规则-rules、全局校验方法-validate
 * FormItem：显示标签-label、执行校验-prop、显示校验结果
 * Input：绑定数据模型-v-model、通知FormItem执行校验
 -->

<template>
  <div>
    <EForm :model="model" :rules="rules" ref="form">
      <EFormItem label="用户名" prop="username">
        <EInput v-model="model.username"></EInput>
      </EFormItem>
      <EFormItem label="密码" prop="password">
        <EInput v-model="model.password" type="password"></EInput>
      </EFormItem>
      <EFormItem>
        <button @click="login">登录</button>
      </EFormItem>
    </EForm>
    {{model}}
  </div>
</template>

<script>
import EInput from './EInput.vue'
import EFormItem from './EFormItem'
import EForm from './EForm'
export default {
  components: {
    EInput,
    EFormItem,
    EForm
  },
  data() {
    return {
      model: {
        username: 'tom',
        password: ''
      },
      rules: {
        username: [ {required: true, message: '用户名必填'} ],
        password: [ {required: true, message: '密码必填'} ]
      }
    };
  },
  methods: {
    login(){
      this.$refs.form.validate((isValid)=>{
        if(isValid){
          alert('登录·~~')
        }else{
          alert('有错！！！')
        }
      })
    }
  }
};
</script>

<style scoped>

</style>

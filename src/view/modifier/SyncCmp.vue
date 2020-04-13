<template>
  <div>
    {{message}}
    <button @click="changeHandler">changeMessage</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      default: '',
      type: String
    }
  },
  methods: {
    changeHandler(){
      this.$emit('update:message', 'newMessage');
    }
  }
};
</script>

<style scoped>

</style>

<!--
 * @Author: Lvhz
 * @Date: 2020-04-21 09:28:22
 * @Descripttion: 使用css编写各种形状
 -->
<template>
  <div>
    <div class="skew"></div>
    <!-- 旋转城市 -->
    <div class="city"></div>
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

<style lang="scss" scoped>
.skew{
  width:100px;
  height:70px;
  background:#f0eb4f;
  margin:0 auto;
  color:#000;
  transform: skew(-15deg);
}
.city{
  width: 240px;
  height: 220px;
  margin: 0 auto;
  background-image: url('../../assets/images/rotate-city.png');
  background-repeat:no-repeat;
  background-position:0 0;
  animation-name: cityRotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
}

@keyframes cityRotate{
  @for $i from 0 to 250 {
    #{$i * 0.4%} { background-position: -(($i * 240px) % 4800) floor($i/20)*(-220px); }
  }
}
</style>

<template>
  <div class="loading-container">
      <li v-for="i in circle" :key="i"></li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circle: 5,
      containerSize: 0,
    };
  },
};
</script>

<style scoped lang="less">
@keyframes run {
  0% {
    transform: translateY(-30px) rotate(0deg);
  }
  100% {
    transform: translateY(-30px) rotate(360deg);
  }
}
@import "~@/styles/mixin.less";
@import url(~@/styles/var.less);
.loading-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  .self-center();
  li {
    width: 10px;
    height: 10px;
    list-style: none;
    border-radius: 50%;
    background-color: @primary;
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    transform: translateY(-500%);
    transform-origin: 0 50px;
    &:nth-of-type(1) {
      animation: run 1s 0s infinite;
    }
    &:nth-of-type(2) {
      animation: run 1s 0.1s infinite;
    }
    &:nth-of-type(3) {
      animation: run 1s 0.2s infinite;
    }
    &:nth-of-type(4) {
      animation: run 1s 0.3s infinite;
    }
    &:nth-of-type(5) {
      animation: run 1s 0.4s infinite;
    }
  }
}
</style>


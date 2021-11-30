<template>
  <div class="layout-container">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name:"Layout"
};
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
  }
}
</style>
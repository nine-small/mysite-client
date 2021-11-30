<template>
  <div class="icon_container">
    <div v-for="ele in types" :key="ele" class="item">
      <Icon :type="ele" />
      <span>{{ ele }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "./";
import { types } from "./index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang='less' scoped>
.icon_container {
  height: 400px;
  width: 400px;
  position: fixed;
  display: flex;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  flex-wrap: wrap;
  justify-content: space-between;
  div.item {
    width: 100px;
    height: 40px;
    line-height: 20px;
    text-align: center;
    span {
      display: block;
      color:#f0f;
    }
    .iconfont{
      color: #f00;
      font-size: 24px;
    }
  }
}
</style>
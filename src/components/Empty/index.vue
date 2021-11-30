<template>
  <div class="empty_container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style  scoped lang='less'>
@import url("~@/styles/mixin.less");
.empty_container {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  text-align: center;
  flex-wrap: wrap;
  .self-center();
  p {
    width: 100%;
    margin: 0;
  }
}
.iconfont {
  display: block;
  width: 100%;
  font-size: 2em;
}
</style>
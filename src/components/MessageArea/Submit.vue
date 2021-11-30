<template>
  <div class="submit-container">
    <button @click="submit" :disabled="loading">
      {{ loading ? "提交中" : "提交" }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("setting", ["loading"]),
  },
  methods: {
    ...mapMutations("setting", ["setLoading"]),
    submit() {
      this.sub = "提交中";
      this.setLoading(true);
      this.$emit("submit");
    },
  },
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.submit-container {
  width: 100px;
  height: 30px;
  line-height: 30px;
}
button {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: @primary;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
}
</style>
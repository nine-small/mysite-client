<template>
  <div class="pager-container">
    <!-- 点击跳转到第一页 -->
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <!-- 点击跳转到上一页 -->
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <!-- 点击调转到对应的页码 -->
    <a
      v-for="(n, i) in showPage"
      :key="i"
      :class="{ active: current === n }"
      @click="handleClick(n)"
      >{{ n }}</a
    >
    <!-- 跳转到下一页 -->
    <a
      :class="{ disabled: current === allPage }"
      @click="handleClick(current + 1)"
      >&gt;&gt;</a
    >
    <!-- 跳转到最后一页 -->
    <a :class="{ disabled: current === allPage }" @click="handleClick(allPage)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    // total 总数据条数
    total: {
      type: Number,
      // default: 100,
    },
    // limit 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // visibleNumber 可见的页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    showPage() {
      let arr = [];
      for (let i = this.showMin; i <= this.showMax; i++) {
        arr.push(i);
      }
      return arr;
    },
    allPage() {
      return Math.ceil(this.total / this.limit);
    },
    showMin() {
      let min = this.current - Math.floor(this.limit / 2);
      min = min < 1 ? 1 : min;
      return min;
    },
    showMax() {
      let max = this.showMin + this.visibleNumber - 1;
      max = max > this.allPage ? this.allPage : max;
      return max;
    },
  },
  methods: {
    handleClick(n) {
      if (n === this.current) {
        return;
      }
      this.$emit("changePage", n);
    },
  },
};
</script>

<style scoped lang='less'>
@import url("../../styles/var.less");
@import url('./Pager.less');
</style>

<template>
  <ul class="article-toc-container">
    <li v-for="(item, i) in dataArr" :key="i">
      <a
        :class="{ selected: item.isSelected }"
        @click="changeHash(item.anchor)"
        >{{ item.name }}</a
      >
      <TocModule :dataArr="item.children" v-if="item.children.length" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "TocModule",
  props: ["dataArr"],
  methods: {
    changeHash(hash) {
      location.hash = "#" + hash;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.article-toc-container {
  padding-left: 20px;
  line-height: 2em;
}
li {
  margin: 20px 0;
  cursor: pointer;
}
a {
  display: block;
  width: 100%;
  height: 100%;

  &.selected {
    color: @warn;
  }
}
</style>
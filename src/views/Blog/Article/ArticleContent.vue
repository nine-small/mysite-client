<template>
  <div class="article-content-container">
    <h1>{{ dataArr.title }}</h1>
    <div class="mes">
      <span>日期:{{ getTime(dataArr.createDate) }}</span>
      <span>浏览:{{ dataArr.scanNumber }}</span>
      <a href="#comment-container"
        ><span>评论:{{ dataArr.commentNumber }}</span></a
      >
      <RouterLink :to="{
          name:'BlogList',
          params:{
              categoryId:dataArr.category.id
          }
      }">
        <span>{{ dataArr.category.name }}</span>
      </RouterLink>
    </div>
    <div class="content" v-html="dataArr.htmlContent"></div>
  </div>
</template>

<script>
import getTime from "@/utils/getTime";
import "highlight.js/styles/github.css";
export default {
  props: ["dataArr"],
  methods: {
    getTime,
  }
};
</script>

<style lang="less" scoped>
.article-content-container {
  width: 100%;
  box-sizing: border-box;
  padding-left: 40px;
}
.mes {
  display: flex;
  height: 30px;
  line-height: 30px;
}

</style>
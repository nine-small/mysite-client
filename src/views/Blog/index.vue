<template>
  <div class="blog-container">
    <Layout>
      <!-- 博客分类详情 -->
      <div class="blog-container-main main">
        <BlogList />
      </div>
      <!-- blog分类 -->
      <template #right>
        <div class="right">
          <BlogCategory />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
// 博客分类详情
import BlogList from "./BlogList";
// 博客分类导航
import BlogCategory from "./BlogCategory";
// 布局组件
import Layout from "@/components/Layout";

export default {
  components: {
    BlogList,
    Layout,
    BlogCategory,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-container {
  width: 100%;
  height: 100%;
  .blog-container-main {
    width: 100%;
    height: 100%;
  }
  .right {
    position: relative;
    width: 250px;
    border-left: 1px solid @gray;
  }
}
</style>


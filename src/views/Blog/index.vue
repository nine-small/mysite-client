<template>
  <div class="blog-container">
    <Layout>
      <!-- 博客分类详情 -->
      <div class="blog-container-main main">
        <BlogList />
      </div>
      <!-- blog分类 -->
      <template #right>
        <div class="right" :style="{width:width+'px'}">
          <BlogCategory />
          <div class="toggle" :class="{ active: close }" @click="toggle">
            <Icon :type="close ? 'asideOff' : 'asideOn'" />
          </div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
// 博客分类详情
import BlogList from "./BlogList/BlogList.vue";
// 博客分类导航
import BlogCategory from "./BlogCategory";
// 布局组件
import Layout from "@/components/Layout";
// icon
import Icon from '@/components/Icon';

export default {
  components: {
    BlogList,
    Layout,
    BlogCategory,
    Icon
  },
  data() {
    return {
      close: false,
      width: 250,
    };
  },
  methods: {
    toggle() {
      if (!this.close) {
        this.width = 0;
      } else {
        this.width = 250;
      }
      console.log(this.close);
      this.close = !this.close;
    },
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
    .blog-container-main-pager {
      padding: 20px 0;
      height: 25px;
      width: 100%;
      background-color: #fff;
    }
  }
  .right {
    position: relative;
    border-left: 1px solid @gray;
    position: relative;
    transition: width 400ms linear;
    .toggle {
      width: 30px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -25px;
      z-index: 999;
      font-size: 30px;
      color: #fff;
      line-height: 50px;
      cursor: pointer;
      &.active {
        margin-left: -20px;
        color: #008c8c;
        background-color: #fff;
      }
    }
  }
}
</style>


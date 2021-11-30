<template>
  <div class="app-container" v-loading="isLoading">
    <div class="total">
      <h3>文章分类</h3>
      <span class="total">(合计{{ total }}条)</span>
    </div>
    <ul class="list" v-if="data">
      <li
        v-for="ele in data"
        :key="ele.id"
        :class="{ selected: ele.id === categoryId }"
        @click="changeCategory(ele)"
      >
        <span class="category-title">{{ ele.name }}</span>
        <span class="category-number">{{ ele.articleCount }}篇</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBlogType } from "@/api/blog.js";
export default {
  data() {
    return {
      isLoading: true,
      data: null,
      total: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const resp = await getBlogType(this.page, this.limit, this.categoryId);
      this.data = resp;
      this.totalArticle();
      this.isLoading = false;
    },
    //
    changeCategory(item) {
      if (this.categoryId === item.id) {
        return;
      }
      const query = {
        page: this.page,
        limit: this.limit,
      };
      this.$router.push({
        name: "BlogList",
        query,
        params: {
          categoryId: item.id,
        },
      });
    },
    // 文章总数
    totalArticle() {
      this.total = this.data.reduce((a, b) => a + b.articleCount, 0);
    },
  },

  computed: {
    // 当路由发生改变时，page、limit、categoryId也会跟着改变
    page() {
      return +this.$route.query.page || 1;
    },
    limit() {
      return +this.$route.query.limit || 5;
    },
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
  },
  // 监控路由，当路由发生变化时，重新请求数据
  watch: {
    async $route() {
      await this.fetchData();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.app-container {
  height: 100%;
  position: relative;
  background-color: rgb(48, 65, 86);
  div.total {
    line-height: 40px;
    display: flex;
    padding-left: 30px;
    padding-top: 30px;
    height: 40px;
    color: rgb(191, 203, 217);
    span.total {
      font-size: 12px;
      color: #888;
      margin-left: 15px;
    }
  }
  ul.list {
    cursor: pointer;
    li {
      display: flex;
      line-height: 56px;
      line-height: 56px;
      color: rgb(191, 203, 217);
      background-color: rgb(48, 65, 86);
      padding-left: 50px;
      &:hover {
        background-color: #001528;
        color: rgb(191, 203, 217);
      }
      &.selected {
        color: rgb(64, 158, 255);
        background-color: rgb(48, 65, 86);
      }
      .category-title {
        width: 120px;
        overflow: hidden;
      }
    }
  }
}
</style>
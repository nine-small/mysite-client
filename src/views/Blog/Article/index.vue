<template>
  <div class="article-container" v-loading="isLoading">
    <Layout>
      <template>
        <div class="main" ref="mainContainer">
          <ArticleContent :dataArr="dataArr" v-if="dataArr.toc" />
          <ArticleComment v-if="!isLoading" />
        </div>
      </template>

      <template #right>
        <div class="right">
          <ArticleToc :dataArr="dataArr.toc" v-if="dataArr.toc" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import fetch from "@/mixins/fetchData";
import ArticleToc from "./ArticleToc";
import ArticleContent from "./ArticleContent";
import ArticleComment from "./ArticleComment";
import mainScroll from "@/mixins/mainScroll";
import setTitle from '@/utils/setTitle'
export default {
  mixins: [fetch({}), mainScroll("mainContainer")],
  name: "Article",
  components: {
    Layout,
    ArticleToc,
    ArticleContent,
    ArticleComment,
  },
  methods: {
    async fetchData() {
      const resp = await this.$http.getBlog(this.$route.params.id);
      setTitle.setRouterTitle(resp.title)
      return resp;
    },
    scrollTop(num) {
      this.$refs.mainContainer.scrollTop = num;
    },
  },
  mounted() {
    this.eventBus.$on("scrollTop", this.scrollTop);
  },
  beforeDestroy() {
    this.eventBus.$off("scrollTop", this.scrollTop);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    hash != "" &&
      setTimeout(() => {
        location = hash;
      }, 50);
  },
};
</script>

<style lang='less' scoped>
.article-container {
  width: 100%;
  height: 100%;
  .main {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    scroll-behavior: smooth;
  }
  .right {
    position: relative;
    width: 300px;
    border-left: 1px solid #ccc;
  }
}
</style>
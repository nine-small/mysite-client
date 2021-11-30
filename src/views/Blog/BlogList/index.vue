<template>
  <div class="app-container" ref="mainContainer">
    <ul class="blog-list" v-if="data.length">
      <li v-for="item in data" :key="item.id" class="blog-item">
        <BlogListItem :data="item" />
      </li>
    </ul>

    <div class="pager">
      <!-- 属性:current/limit/total 事件:changePage-->
      <Pager
        v-if="data"
        :current="page"
        :limit="limit"
        :total="total"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
// BlogListItem
import BlogListItem from "@/views/Blog/BlogList/BlogListItem";
// 翻页组件
import Pager from "@/components/Pager";
// 分页获取博客简要
import { getBlogs } from "@/api/blog.js";
// 
import { mapState,mapMutations } from 'vuex';
export default {
  components: {
    BlogListItem,
    Pager,
  },
  data() {
    return {
      // isLoading: false,
      data: [],
      total: 0,
    };
  },
  computed: {
    ...mapState('setting',['loading']),
    page() {
      return +this.$route.query.page || 1;
    },
    limit() {
      return +this.$route.query.limit || 5;
    },
    categoryId() {
      return this.$route.params.categoryId || -1;
    }
  },
  watch: {
    async $route() {
      await this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.eventBus.$on("scrollTop", this.scrollTop);
  },
  beforeDestroy() {
    this.eventBus.$off("scrollTop", this.scrollTop);
  },
  methods: {
    ...mapMutations('setting',['setLoading']),
    scrollTop(num) {
      this.$refs.mainContainer.scrollTop = num;
    },
    async fetchData() {
      this.setLoading(true)
      const resp = await getBlogs(this.page, this.limit, this.categoryId);
      this.total = resp.total;
      this.data = resp.rows;
      this.setLoading(false)
 
    },
    changePage(current) {
      const query = {
        page: current,
        limit: this.limit,
      };
      const params = {
        categoryId: this.categoryId,
      };
      this.$router.push({
        name: "BlogList",
        query,
        params,
      });
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.app-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}
ul.blog-list {
  li.blog-item {
    width: 100%;
    border-bottom: 1px solid @gray;
    padding: 20px 0;
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
  }
}

.pager {
  height: 50px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
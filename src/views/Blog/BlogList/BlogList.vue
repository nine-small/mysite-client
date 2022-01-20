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
import { mapState, mapMutations } from "vuex";
// 混合
import mainScroll from '@/mixins/mainScroll.js'
export default {
  mixins:[mainScroll('mainContainer')],
  components: {
    BlogListItem,
    Pager,
  },
  data() {
    return {
      data: [],
      total: 0,
    };
  },
  computed: {
    ...mapState("setting", ["loading"]),
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
  watch: {
    async $route() {
      await this._fetchData();
      this.eventBus.$emit('scrollTop',0)
    },
  },
  created() {
    this._fetchData();
  },
  mounted() {
    this.eventBus.$on("scrollTop", this.scrollTop);
  },
  beforeDestroy() {
    this.eventBus.$off("scrollTop", this.scrollTop);
  },
  methods: {
    ...mapMutations("setting", ["setLoading"]),
    scrollTop(num) {
      this.$refs.mainContainer.scrollTop = num;
    },
    async _fetchData() {
      this.setLoading(true);
      const {total,rows} = await this.$http.getBlogs(
        this.page,
        this.limit,
        this.categoryId
      );
      this.total = total;
      this.data = rows;
      this.setLoading(false);
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
  },
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
  background-color: #fff;
}
</style>
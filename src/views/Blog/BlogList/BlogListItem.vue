<template>
  <div class="app-container">
    <div class="blog-block">
      <Layout>
        <!-- avatar -->
        <template #left>
          <div class="left">
            <RouterLink
              :to="{
                name: 'Article',
                params: {
                  id: data.id,
                },
              }"
            >
              <img :src="data.thumb" :title="data.title" />
            </RouterLink>
          </div>
        </template>

        <div class="main">
          <!-- 点击标题跳转到文章详情 -->
          <RouterLink
            :to="{
              name: 'Article',
              params: {
                id: data.id,
              },
            }"
          >
            <h2 class="title">{{ data.title }}</h2>
          </RouterLink>
          <div class="mes">
            <span class="item date"> 日期：{{ getTime(data.createDate) }}</span>
            <span class="item scan-number">浏览：{{ data.scanNumber }}</span>
            <span class="item comment"> 评论：{{ data.commentNumber }}</span>
            <span class="item handle" @click="handleCategory(data)">{{
              data.category.name
            }}</span>
          </div>
          <p>{{ data.description }}</p>
        </div>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import getTime from "@/utils/getTime";
export default {
  name: "BlogListItem",
  props: ["data"],
  components: {
    Layout,
  },
  methods: {
    getTime,
    scrollTop(num) {
      this.$refs.mainContainer.scrollTop = num;
    },
    handleCategory(data) {
      const query = {
        page: 1,
        limit: 5,
      };
      const params = {
        categoryId: data.category.id,
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
  .blog-block {
    .left {
      width: 200px;
      padding-right: 20px;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        img {
          width: 200px;
        }
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      h2 {
        cursor: pointer;
        line-height: 40px;
        &:hover {
          color: @primary;
        }
      }
      .mes {
        display: flex;
        font-size: 12px;
        color: #888;
        span.item {
          margin-right: 20px;
          &.handle{
            &:hover{
              color: @primary;
            }
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>

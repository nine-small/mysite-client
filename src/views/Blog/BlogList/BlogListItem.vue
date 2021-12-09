<template>
  <div class="app-container">
    <div class="blog-block">
      <Layout>
        <template #left>
          <div class="left">
            <RouterLink
              :to="{
                name: 'Article',
                params: { id: data.id },
              }"
            >
              <!-- <img v-lazy="serviceUrl + data.thumb" /> -->
              <img v-lazy="data.thumb" />
            </RouterLink>
          </div>
        </template>

        <div class="main">
          <RouterLink
            :to="{
              name: 'Article',
              params: { id: data.id },
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
import serviceUrl from "@/serviceUrl";
export default {
  name: "BlogListItem",
  props: ["data"],
  data() {
    return {
      serviceUrl,
    };
  },
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
        display: block;
        width: 100%;
        height: 100%;
        align-items: center;
        img {
          height: 200px;
          width: 100%;
        }
      }
    }
    .main {
      h2 {
        cursor: pointer;
        margin: 0;
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
          &.handle {
            &:hover {
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

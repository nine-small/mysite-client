<template>
  <div class="message-list-container" v-if="data">
    <Layout>
      <template #left>
        <div class="header">
          <img :src="data.avatar" />
        </div>
      </template>
      <div class="main">
        <div class="base">
          <div class="name">{{ data.nickname }}</div>
          <div class="time">{{ getTime(data.createDate, true) }}</div>
        </div>
        <div class="content">{{ data.content }}</div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import getTime from "@/utils/getTime";
import serviceUrl from "@/serviceUrl";
export default {
  components: {
    Layout,
  },
  data() {
    return {
      serviceUrl,
    };
  },
  props: ["data"],
  methods: {
    getTime,
  },
};
</script>

<style lang="less" scoped>
.message-list-container {
  width: 100%;
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
.header {
  width: 44px;
  height: 44px;
  margin: 5px 20px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.base {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .name {
    color: #65a13b;
    font-size: 14px;
  }
  .time {
    color: #ccc;
    font-size: 12px;
  }
}
</style>
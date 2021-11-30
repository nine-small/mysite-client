<template>
  <div class="message-container" ref="mainContainer">
    <Form @handleSubmit="handleSubmit" />

    <div class="liu">
      <h2>留言板</h2>
      <span>共{{ total }}条</span>
    </div>

    <ul v-if="data" class="message-list">

      <li v-for="(item, i) in data" :key="i">
        <MessageList :data="item" />
      </li>
      <Empty v-if="data.length === 0 && !loading" />
    </ul>

    <div class="kong" v-loading="loading" v-show="loading"></div>
  </div>
</template>

<script>
// 留言板 or 评论框
import Form from "@/components/MessageArea/Form";
// MessageList
import MessageList from "@/components/MessageArea/MessageList";
// 混入
import mainScroll from "@/mixins/mainScroll";
// 获取、提交评论
import { getMessages, postMessage } from "@/api/message";
// 空
import Empty from "@/components/Empty";
// showMessage
import showMessage from "@/utils/showMessage";
//

import { mapMutations, mapState } from "vuex";
export default {
  mixins: [mainScroll("mainContainer")],
  components: {
    Form,
    MessageList,
    Empty,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      total: 0,
      data: null,
    };
  },
  created(){
    this.fetchData();
  },
  methods: {
    ...mapMutations("setting", ["setLoading"]),
    async fetchData() {
      const resp = await getMessages(this.page, this.limit);
      this.total = resp.total;
      this.data = resp.rows;
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.setLoading(true);
      this.page++;
      const resp = await getMessages(this.page, this.limit)
        this.data = [...this.data, ...resp.rows];
        this.setLoading(false);
    },
    async handleSubmit(data, container) {
      const resp = await postMessage(data);
      if (typeof resp === "object") {
        showMessage({ container });
        this.page = 1;
        this.limit = 10;
        await this.fetchData();
        this.setLoading(false);
      }
    },
    handleScroll(dom) {
      if (!dom) {
        return;
      }
      const diff = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
      if (diff < 50 && !this.loading) {
        this.fetchMore();
      }
    },
    scrollTop(n) {
      this.$refs.mainContainer.scrollTop = n;
    },
  },
  computed: {
    ...mapState("setting", ["loading"]),
    hasMore() {
      return (
        !this.data || this.data.length < this.total
      );
    },
  },
  mounted() {
    this.eventBus.$on("mainScroll", this.handleScroll);
    this.eventBus.$on("scrollTop", this.scrollTop);
  },
  beforeDestroy() {
    this.eventBus.$off("mainScroll", this.handleScroll);
    this.eventBus.$off("scrollTop", this.scrollTop);
  },
};
</script>

<style lang='less' scoped>
.message-container {
  padding: 50px 50px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden auto;
  scroll-behavior: smooth;
}
.liu {
  display: flex;
  margin-bottom: 20px;
  line-height: 50px;
  h2 {
    padding: 0;
    margin: 0;
    margin-right: 20px;
  }
}
.kong {
  height: 100px;
  width: 100%;
  position: relative;
}
</style>
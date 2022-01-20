<template>
  <div class="message-area-container">
    <Form @handleSubmit='postComment'/>
    <h2 style="margin-top: 30px">评论列表：{{ total }}条</h2>
    <ul v-if="commentData" id="comment-container">
      <li v-for="(item, i) in commentData" :key="i">
        <MessageList :data="item" />
      </li>
    </ul>
    <div class="kong" v-loading="loading" v-show="loading"></div>
  </div>
</template>

<script>
import Form from "@/components/MessageArea/Form";
import MessageList from "@/components/MessageArea/MessageList";
import { mapState, mapMutations } from "vuex";
import showMessage from '@/utils/showMessage'
export default {
  components: {
    Form,
    MessageList,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      commentData: null,
      total: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapMutations("setting", ["setLoading"]),
    async fetchData() {
      const resp = await this.$http.getComments(this.page, this.limit,this.blogId);
      this.commentData = resp.rows;
      this.total = resp.total;
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.setLoading(true);
      this.page++;
      const resp = await this.$http.getComments(this.page, this.limit,this.blogId);
      this.setLoading(false);
      this.commentData = [...this.commentData, ...resp.rows];
      this.total = resp.total;
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
    async postComment(data,container){
      data.blogId = this.blogId
      const resp = await this.$http.postComment(data)
      console.log(resp)
      if(typeof resp === 'object'){
        await this.fetchData();
        showMessage({container,text:'提交成功'})
        this.setLoading(false)
      }
    }
  },
  computed: {
    ...mapState("setting", ["loading"]),
    hasMore() {
      return (
        !this.commentData || this.commentData.length < this.total
      );
    },
    blogId(){
      return this.$route.params.id || -1
    }
  },
  mounted() {
    this.eventBus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.eventBus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.message-area-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  ul {
    position: relative;
  }
  .kong {
    height: 100px;
    width: 100%;
    position: relative;
  }
}
</style>
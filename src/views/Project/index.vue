<template>
  <ul
    class="project-container"
    v-loading="loading"
    ref="mainContainer"
  >
    <li v-for="item in data" :key="item.id">
      <Layout>
        <template #left>
          <div class="left">
            <a :href="item.rul">
              <img v-lazy="item.thumb" />
            </a>
          </div>
        </template>

        <div class="main">
          <a :href="item.url"
            ><h1>{{ item.name }}</h1></a
          >
          <a :href="item.github" class="github" v-if="item.github">github</a>
          <p v-for="(ele, i) in item.description" :key="i">{{ ele }}</p>
        </div>
      </Layout>
    </li>
  </ul>
</template>

<script>
import Layout from "@/components/Layout";
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [mainScroll('mainContainer')],
  components: {
    Layout,
  },
  computed: {
    ...mapState("project", ["data", "loading"]),
  },
  methods:{
    scrollTop(num){
      this.$refs.mainContainer.scrollTop = num;
    }
  },
  created() {
    this.$store.dispatch("project/getProjects");
  },
  mounted(){
    this.eventBus.$on('scrollTop',this.scrollTop)
  },
  destroyed(){
    this.eventBus.$off('scrollTop',this.scrollTop)
  }
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.project-container {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  padding: 10px;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
li {
  padding: 20px;
  min-height: 200px;
  transition: all 0.4s;

  &:hover {
    border: 1px solid #333;
    transform: scale(1.01);
    box-shadow: 0 0 5px black;
  }
}
.left {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 30px;
  a {
    width: 200px;
    height: 200px;
    display: block;
    img {
      width: 100%;
      height: 200px;
    }
  }
}
.github {
  font-size: 14px;
  color: @primary;
}
</style>
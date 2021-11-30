<template>
  <div class="article-toc-container">
    <h2>文章目录</h2>
    <TocModule :dataArr="tocWithSelected" />
  </div>
</template>
<script>
import TocModule from "./TocModule";
import debounce from '@/utils/debounce'
export default {
  name: "ArticleToc",
  props: ["dataArr"],
  components: {
    TocModule,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    tocWithSelected() {
      const getMap = (arr = []) => {
        return arr.map((ele) => {
          return {
            ...ele,
            isSelected: ele.anchor === this.activeAnchor,
            children: getMap(ele.children),
          };
        });
      };
      return getMap(this.dataArr);
    },
    doms() {
      const doms = [];
      const getDoms = (arr) => {
        arr.forEach((ele) => {
          doms.push(document.getElementById(ele.anchor));
          ele.children && getDoms(ele.children);
        });
      };
      getDoms(this.dataArr);
      return doms;
    },
  },
  mounted() {
    this.debounceSetSelect = this.debounce(this.setSelect);
    // 监听事件总线
    this.eventBus.$on("mainScroll", this.debounceSetSelect);
  },
  beforeDestroy(){
    this.eventBus.$off("mainScroll", this.debounceSetSelect);
  },
  methods: {
    debounce,
    changeHash(hash) {
      location.hash = "#" + hash;
    },
    setSelect() {
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top < range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          continue;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.article-toc-container {
  padding-left: 20px;
  line-height: 2em;
}
</style>
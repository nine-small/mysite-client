<template>
  <ul
    ref="container"
    class="ul-list-image"
    :style="{ height: len * 100 + '%', 'margin-top': '-' + marginTop }"
  >
    <li
      v-for="item in data"
      :key="item.id"
      :style="{ height: (1 / len) * 100 + '%' }"
    >
      <div class="mes" v-if="showMes"><ShowMessage :data="item" /></div>

      <i class="img">
        <ImageLoader
          :src="item.bigImg"
          :placeholder="item.midImg"
          @load="showMes = true"
        />
      </i>
    </li>
  </ul>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import ShowMessage from "./showMessage.vue";
export default {
  props: ["data", "index"],
  components: {
    ImageLoader,
    ShowMessage,
  },
  data() {
    return {
      marginTop: 0,
      showMes: false,
    };
  },
  methods: {
    handResize() {
      this.marginTop =
        (parseInt(this.$refs.container.clientHeight) / this.len) * this.index +
        "px";
    },
  },
  mounted() {
    this.unWatch = this.$watch(
      () => this.index,
      () => {
        this.marginTop =
          (parseInt(this.$refs.container.clientHeight) / this.len) *
            this.index +
          "px";
      }
    );
    window.onresize = this.handResize;
  },
  destroyed() {
    this.unWatch();
  },
  computed: {
    len() {
      return this.data.length;
    },
  },
};
</script>

<style lang="less" scoped>
.width-height {
  width: 100%;
  height: 100%;
}
.ul-list-image {
  width: 100%;
  transition: margin-top 1s;
}
li {
  width: 100%;
  position: relative;
  i.img {
    display: block;
    .width-height();
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .mes {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
}
</style>
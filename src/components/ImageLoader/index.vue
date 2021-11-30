<template>
  <img
    ref="img"
    v-on="{ mousemove: move, mouseout: leave }"
    :style="{ left, top }"
  />
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      top: 0,
    };
  },
  props: {
    // 需要展示的图片的路径
    src: {
      type: String,
      required: true,
    },
    // 缩略图的地址
    placeholder: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$refs.img.src = this.placeholder;
    const img = new Image();
    img.src = this.src;
    img.onload = () => {
      this.$refs.img.src = this.src;
      // 展示的图片加载完了之后抛出一个事件
      this.$emit("load");
    };
  },
  methods: {
    move(e) {
      this.left = (e.target.clientWidth / 2 - e.pageX) / 13 + "px";
      this.top = (e.target.clientHeight / 2 - e.pageY) / 10 + "px";
    },
    leave() {
      this.left = 0;
      this.top = 0;
    },
  },
};
</script>

<style lang='less' scoped>
img {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  transition: all 400ms;
}
</style>
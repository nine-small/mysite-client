<template>
  <div class="rotation-container" ref="father">
    <div class="content" ref="container">
      <Content v-bind="{ data, index }" />
    </div>
    <div class="circle">
      <CircleList v-bind="{ data, index }" @changeList="changeList" />
    </div>
    <button class="top btn" @click="btnUp" v-show="index !== 0">
      <Icon :type="'arrowUp'" />
    </button>
    <button
      class="bottom btn"
      @click="btnDown"
      v-show="index !== data.length - 1"
    >
      <Icon :type="'arrowDown'" />
    </button>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Content from "./content";
import CircleList from "./circle";
export default {
  props: ["data"],
  components: {
    Icon,
    Content,
    CircleList,
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.$refs.father &&
      this.$refs.father.addEventListener("mousewheel", this.mouseWheelEvent);
  },
  destroyed() {
    window.removeEventListener("resize",this.handleResize);
  },
  data() {
    return {
      index: 0,
      height: 0,
      isAuto: false,
    };
  },
  methods: {
    btnUp() {
      this.index === 0 ? "" : this.index--;
    },
    btnDown() {
      const len = this.data.length;
      this.index === len - 1 ? "" : this.index++;
    },
    changeList(i) {
      this.index = i;
    },
    handleResize() {
      this.height = this.$refs.father && this.$refs.father.clientHeight;
    },
    mouseWheelEvent(e) {
      if (this.isAuto) {
        return;
      }
      this.isAuto = true;
      if (e.deltaY < 0) {
        this.btnUp();
      } else {
        this.btnDown();
      }
      setTimeout(() => {
        this.isAuto = false;
      }, 400);
    },
  },
  computed: {
    ulTop() {
      return -this.index * this.height + "px";
    },
    len() {
      return this.data.length;
    },
  },
};
</script>

<style scoped lang='less'>
@import "~@/styles/global.less";
@jump: 5px;
@keyframes jump-top {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}
@keyframes jump-bottom {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}
.width-height {
  width: 100%;
  height: 100%;
}
.rotation-container {
  .width-height();
  position: relative;
  .content {
    .width-height();
    overflow: hidden;
  }
  .circle {
    position: absolute;
    right: 10px;
    top: 50%;
    padding: 0 10px;
    transform: translateY(-50%);
    z-index: 999;
  }
  button.btn {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #ccc;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 999;
    .iconfont {
      .width-height();
      &:hover {
        color: #fff;
      }
    }
    &.top {
      top: 5%;
      animation: jump-top 2s infinite;
    }
    &.bottom {
      bottom: 5%;
      animation: jump-bottom 2s infinite;
    }
  }
}
</style>
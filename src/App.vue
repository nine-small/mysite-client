<template>
  <div id="app" class="app_container">
    <Layout>
      <template #left>
        <div class="left" :style="{ width: width + 'px' }">
          <SiteAside />
          <div class="toggle" :class="{ active: close }" @click="toggle">
            <Icon :type="close ? 'asideOn' : 'asideOff'"/>
          </div>
        </div>
      </template>
      <template>
        <div class="main">
          <RouterView />
          <ToTop />
        </div>
      </template>
    </Layout>
  </div>
</template>
          
<script>
// 布局模块
import Layout from "@/components/Layout";
// 侧边菜单栏
import SiteAside from "@/components/SiteAside";
// toTop
import ToTop from "@/components/ToTop";
// Icon
import Icon from '@/components/Icon';

export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
    ToTop,
    Icon
  },
  data() {
    return {
      close: false,
      width: 250,
    };
  },
  methods: {
    toggle() {
      if (!this.close) {
        this.width = 0;
      } else {
        this.width = 250;
      }
      console.log(this.close);
      this.close = !this.close
    },
  },
};
</script>

<style lang='less'>
@import "~@/styles/global.less";
.width_height {
  width: 100%;
  height: 100%;
}
.app_container {
  .width_height();
  .left {
    height: 100%;
    transition: width 400ms linear;
    position: relative;
    .toggle {
      width: 30px;
      height: 50px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -25px;
      z-index: 999;
      font-size: 30px;
      color: #fff;
      line-height: 50px;
      cursor: pointer;
      &.active {
        margin-right: -20px;
        color:#008c8c;
        background-color: #fff;
      }
    }
  }
  .main {
    height: 100%;
    position: relative;
  }
}
</style>

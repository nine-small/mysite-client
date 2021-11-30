<template>
  <div id="app" class="app_container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
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

export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
    ToTop,
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
    width: 250px;
    height: 100%;
  }
  .main {
    height: 100%;
    position: relative;
  }
}
</style>

<template>
  <div class="test_container">
    <Layout>
      <template #left>
          <div class="left">left</div>
      </template>
      <template>
          <div class="main">main</div>
      </template>
      <template #right>
          <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
Layout
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test_container{
    width:100%;
    height: 900px;
    .left{
        width: 250px;
        background-color: #f00;
    }
    .main{
        width:100%;
        background-color: #f0f;
    }
    .right{
        width:200px;
        background-color: #99f;
    }
    
}
</style>
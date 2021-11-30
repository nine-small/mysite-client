<template>
  <div class="test_container">
    <Contact/>
  </div>
</template>

<script>
import Contact from "./"
export default {
  components:{
    Contact
  }
}
</script>

<style lang="less" scoped>
    .test_container{
        width: 300px;
        background-color: rgba(0,0,0,0.8);
        padding:20px;
        margin:300px auto;
    }
</style>
<template>
  <div class="test-container">
      <Loading/>
  </div>
</template>

<script>
import Loading from './'
export default {
    components:{
        Loading
    }
}
</script>

<style scoped lang='less'>
.test-container{
    width: 400px;
    height: 400px;
    margin:100px auto;
    border:1px solid #ccc;
    position: relative;
}
</style>
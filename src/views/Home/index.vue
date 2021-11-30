<template>
  <div class="home-container" v-loading="loading">
    <Rotation :data="data" v-if='data'/>
  </div>
</template>

<script>
import Rotation from "./Rotation";
import { mapState } from 'vuex'
export default {
  components: {
    Rotation,
  },
  computed:{
    ...mapState('banner',['data','loading'])
  },
  created(){
    this.$store.dispatch('banner/getBanner')
  }
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
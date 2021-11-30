<template>
  <div class="about-container" v-loading='loading || selfLoading'>
    <iframe :src="data.about" @load="selfLoading=false"  v-if='data'></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState('setting',['data','loading'])
  },
  data(){
    return {
      selfLoading:true
    }
  },
}
</script>

<style scoped lang='less'>
.about-container{
  width: 100%;
  height: 100%;
  position: relative;

}
iframe{
  display: block;
  width: 100%;
  height: 100%;
}


</style>
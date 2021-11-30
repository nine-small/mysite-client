<template>
  <div class="to-top-container" v-show='show' ref='top'>TOP</div>
</template>


<script>

export default {
  data(){
    return {
      show:false
    }
  },
  created(){
    this.eventBus.$on('mainScroll',this.toShow)
  },
  mounted(){
    this.$refs.top.addEventListener('click',this.topHandle)
  },
  beforeDestroy(){
    this.eventBus.$off('mainScroll',this.toShow)
  },
  methods:{
    toShow(dom){
      if(!dom){
        this.show = false;
        return 
      }
      this.show = dom.scrollTop < 500 ? false : true;
    },
    topHandle(){
      this.eventBus.$emit('scrollTop',0)
    }
  },
}
</script>


<style scoped lang="less">
@import url(~@/styles/var.less);
.to-top-container{
    height: 50px;
    width: 50px;
    border-radius:50%;
    cursor: pointer;
    position: fixed;
    right: 50px;
    bottom:50px;
    background-color: @primary;
    color:#fff;
    text-align: center;
    line-height: 50px;
}
</style>
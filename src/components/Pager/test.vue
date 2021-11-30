<template>
  <div>
    <Pager :current="current" :total="total" @changePage="changePageHandle"/>
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data(){
      return {
          total:300,
          current:1
      }
  },
  methods:{
      changePageHandle(n){
          console.log(n)
          this.current = n
      }
  }
};
</script>

<style>
</style>
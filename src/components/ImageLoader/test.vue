<template>
  <div class="test_container">
    <ImageLoader v-bind="{ src, placeholder }" @load='loadHandler'/>
  </div>
</template>

<script>
import ImageLoader from './'
export default {
    components:{
        ImageLoader
    },
    data(){
        return {
            src:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
            placeholder:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
        }
    },
    methods:{
        loadHandler(){
            console.log(123)
        }
    }
}
</script>

<style lang='less' scoped>
.test_container {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid;
}
</style>
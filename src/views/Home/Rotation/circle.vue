<template>
  <ul class="list-circle">
    <li
      v-for="(item, i) in data"
      :key="item.id"
      @click="changeList(i)"
      :class="{ active: index == i }"
    ></li>
  </ul>
</template>

<script>
export default {
  props: ["data",'index'],
  methods:{
      changeList(i){
          this.$emit('changeList',i)
      }
  }
};
</script>

<style lang='less' scoped>
ul.list-circle {
  width: 100%;
  height: 100%;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: transparent;
    margin: 10px 0;
    border: 2px solid #fff;
    cursor: pointer;
    &.active {
      background-color: #fff;
    }
  }
}
</style>
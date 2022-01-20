<template>
  <img class="avatar_container" :src="url" :style="{width:size + 'px',height:size + 'px'}"/>
</template>

<script>
// 传过来类型和尺寸。尺寸的默认值为150px
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
    },
    size: {
      type: Number,
      default:150
    },
  },
};
</script>

<style scoped lang="less">
  .avatar_container{
    border-radius: 50%;
    display: block;
  }
</style>

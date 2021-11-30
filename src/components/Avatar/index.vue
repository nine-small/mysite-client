<template>
  <img class="avatar_container" :src="url" :style="{width:size + 'px',height:size + 'px'}"/>
</template>

<script>
export default {
  name: "HeadPortrait",
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
    color:inherit;
    font-size: inherit;
  }
</style>

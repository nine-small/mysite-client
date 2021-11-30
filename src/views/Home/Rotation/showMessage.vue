<template>
  <div class="show-message-container">
    <h1 ref="title">{{ data.title }}</h1>
    <p ref="mes">{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      titleWidth: 0,
      mesWidth: 0,
      show:false
    };
  },
  methods: {
    showMes() {
      const title = this.$refs.title;
      const mes = this.$refs.mes;
      title.style.width = 0;
      mes.style.width = 0;
      mes.style.opacity = 1;
      title.style.opacity = 1;
      getComputedStyle(title).width;
      title.style.width = this.titleWidth + "px";
      mes.style.width = this.mesWidth + "px";
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title && this.$refs.title.clientWidth;
    this.mesWidth = this.$refs.mes && this.$refs.mes.clientWidth;
    this.showMes()
  },
  watch:{
      
  }
};
</script>

<style scoped lang='less'>
div.show-message-container {
  color: #fff;
  h1 {
    transition: width 1s;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  p {
    transition: width 1s 1s;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
<template>
  <div class="app-container">
    <!-- <Avatar :url="serviceUrl+data.avatar" v-if="data" /> -->
    <Avatar :url="data.avatar" v-if="data" />
    <h1 class="head" v-if="data">{{ data.siteTitle }}</h1>
    <Menu />
    <Contact :data="data" v-if="data" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
import { mapState } from "vuex";
import setTitle from "@/utils/setTitle";
import serviceUrl from '@/serviceUrl'
setTitle;
export default {
  data(){
    return{
      serviceUrl
    }
  },
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", ["data", "loading"]),
  },
  created() {
    this.$store.dispatch("setting/getSetting").then(() => {
      setTitle.setTitle(this.data.siteTitle);
    });
  },
};
</script>

<style lang="less" scoped>
.app-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  color: #373737;
  overflow: hidden auto;
  background-color: #304156;
  .avatar_container {
    margin: 0 auto;
  }
  h1.head {
    text-align: center;
    font-size: 1.2em;
    color: #fff;
    height: 25px;
    line-height: 25px;
    margin: 0.67em 0;
  }
  .contact_container {
    padding: 20px;
  }
}
</style>
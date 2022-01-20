<template>
  <ul class="contact-container" v-if="data">

    <li>
      <a :href="data.github" target="_blank">
        <Icon type="github" />
        <span>{{ data.githubName }}</span>
      </a>
    </li>

    <li>
      <a>
        <Icon type="mail" />
        <span>{{ data.mail }}</span>
      </a>
    </li>

    <li>
      <div class="image">
        <img :src="data.qqQrCode" alt="QQ" />
      </div>
      <a>
        <Icon type="qq" />
        <span>{{ data.qq }}</span>
      </a>
    </li>

    <li>
      <div class="image">
        <img :src="data.weixinQrCode" alt="微信" />
      </div>
      <a>
        <Icon type="weixin" />
        <span>{{ data.weixin }}</span>
      </a>
    </li>

  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import serviceUrl from '@/serviceUrl'
export default {
  data(){
    return {
      serviceUrl
    }
  },
  components: {
    Icon,
  },
  props:['data']
};
</script>
z``

<style lang="less" scoped>
@import "~@/components/SiteAside/Contact/contact.less";
</style>
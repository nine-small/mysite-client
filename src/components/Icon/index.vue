<template>
  <i class="iconfont" :class="iconClass"></i>
</template>

<script>
const classMap = {
  home: "icon-icon_zhuye-mian",
  success: "icon-icon_zhengque",
  error: "icon-icon-cuowu",
  close: "icon-icon_guanbi",
  warn: "icon-icon_jinggao",
  info: "icon-icon_xinxi",
  blog: "icon-icon-blog",
  code: "icon-iconCode",
  about: "icon-set_about_hov",
  weixin: "icon-icon_weixin-logo",
  mail: "icon-iconemail",
  github: "icon-icon_github",
  qq: "icon-QQ",
  arrowUp: "icon-up",
  arrowDown: "icon-down",
  empty: "icon-empty_fill",
  chat: "icon-chat",
  asideOn:"icon-list_on",
  asideOff:"icon-list_off"
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass() {
      return classMap[this.type];
    },
  },
};

</script>

<style scoped>
/* iconfont在线资源 */
@import url("//at.alicdn.com/t/font_2872752_2rb5fl9mfc9.css");
.iconfont{
  color:inherit;
  font-size: inherit;
}
</style>

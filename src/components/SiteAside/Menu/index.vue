<template>
  <div>
    <nav class="menu-container">
      <RouterLink
        :to="{ name: item.name }"
        v-for="item in items"
        :key="item.path"
        :exact="item.exact"
      >
        <Icon :type="item.type" />
        <span>{{ item.mes }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import items from "./items.js";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items,
    };
  },
};
</script>
<style lang="less" scoped>
@import url(~@/styles/var.less);
.menu-container {
  margin: 24px 0;
  width: 100%;
  a {
    display: flex;
    padding: 0 50px;
    height: 45px;
    line-height: 45px;
    color: @gray;
    .iconfont {
      width: 36px;
      height: 45px;
    }
    &:hover {
      background-color: #001528;
      color: #bfcbd9;
    }
    &.router-link-active {
      color: @primary;
    }
  }
}
</style>
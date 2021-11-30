<template>
  <div class="form-container" ref='container'>
    <div class="input-area">
      <input
        type="text"
        v-model="nickname"
        maxlength="10"
        placeholder="输入昵称"
        v-focus="[focus, blur]"
      />
      <span class="tip">{{ nickname.length }}/10</span>
      <div class="error">{{ nicknameShow }}</div>
    </div>

    <div class="content-area" ref="container">
      <textarea
        maxlength="300"
        placeholder="输入内容"
        v-model="content"
        v-focus="[focus, blur]"
      ></textarea>
      <span class="tip">{{ content.length }}/300</span>
      <div class="error">{{ contentShow }}</div>
    </div>
    <Submit @submit="submit" />
  </div>
</template>

<script>
import Submit from "./Submit";
import { postComment } from "@/api/blog";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Submit,
  },
  data() {
    return {
      nickname: "",
      content: "",
      contentShow: "",
      nicknameShow: "",
    };
  },
  computed: {
    ...mapState("setting", ["loading"]),
  },
  methods: {
    ...mapMutations("setting", ["setLoading"]),
    async fetchData() {
      const options = {
        nickname: this.nickname,
        content: this.content,
      };
      return await postComment(options);
    },
    focus(dom) {
      dom.style.borderColor = "#6b9eee";
    },
    blur(dom) {
      dom.style.borderColor = "#b4b8bc";
    },
    submit() {
      this.nicknameShow = this.nickname ? "" : "请输入昵称";
      this.contentShow = this.content ? "" : "请输入内容";
      if (this.nicknameShow || this.contentShow) {
        this.setLoading(false)
        return;
      }
      this.$emit("handleSubmit", {
        nickname: this.nickname,
        content: this.content,
      },this.$refs.container);
      this.nickname = '';
      this.content = '';
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.form-container {
  width: 100%;
}
.input-area {
  width: 50%;
  position: relative;
  input {
    display: block;
    height: 40px;
    border: 1px dashed @gray;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    padding: 0 15px;
  }
}
.tip {
  position: absolute;
  bottom: 45px;
  right: 5px;
  width: 30px;
  line-height: 20px;
  font-size: 12px;
  color: @gray;
}
.content-area {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  textarea {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 10px;
    border: 1px dashed @gray;
    resize: none;
    outline: none;
  }
  .tip {
    right: 25px;
  }
}
.error {
  height: 30px;
  margin: 2px 0;
  width: 100%;
  line-height: 30px;
  color: @warn;
}
</style>
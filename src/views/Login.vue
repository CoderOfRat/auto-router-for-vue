<template>
  <div class="login">
    登录页
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      window.localStorage.setItem("iflogin", true);
      this.$router.push("/home");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
}
</style>

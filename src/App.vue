<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  mounted() {
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
</style>

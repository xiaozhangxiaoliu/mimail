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
    this.getUser();
    this.getcatCount();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res) => {
        console.log(res);
      });
    },
    getcatCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
@import "./assets/scss/reset.scss";
@import "./assets/scss/mixin.scss";
@import "./assets/scss/base.scss";
@import "./assets/scss/modal.scss";
</style>

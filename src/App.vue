<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getcatCount();
    }
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res) => {
        console.log(res);
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getcatCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        console.log(res);
        this.$store.dispatch("saveCartCount", res);
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

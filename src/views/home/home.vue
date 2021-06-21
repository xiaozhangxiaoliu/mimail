<template>
  <div class="home">
    <home-nav-header></home-nav-header>
    <router-view></router-view>
    <home-nav-footer></home-nav-footer>
  </div>
</template>

<script>
import homeNavHeader from "../../components/Home/homeNavHeader.vue";
import HomeNavFooter from "../../components/Home/homeNavFooter.vue";

export default {
  components: { homeNavHeader, HomeNavFooter },
};
</script>

<style lang='scss' scoped>
</style>
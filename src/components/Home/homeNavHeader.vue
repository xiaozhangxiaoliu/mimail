<template>
  <div class="header">
    <div class="nav-top">
      <div class="contanier">
        <div class="toper-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="toper-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-font"></span> 购物车</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.header {
  .nav-top {
    height: 39px;
    background-color: #333333;
    line-height: 39px;

    .contanier {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-font {
          display: inline-block;
          width: 16px;
          height: 12px;
          background-image: url("../../../public/imgs/icon-cart-checked.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 16px 12px;
          margin-right: 4px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
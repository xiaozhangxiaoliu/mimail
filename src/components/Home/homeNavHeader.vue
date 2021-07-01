<template>
  <div class="header">
    <div class="nav-top">
      <div class="container">
        <div class="toper-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="toper-user">
          <a href="javascript:;" @click="login" v-if="!$store.state.username">
            登录
          </a>
          <a href="javascript:;" v-else>{{ $store.state.username }}</a>
          <a href="javascript:;" v-show="!$store.state.username">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-font"></span> 购物车({{
              $store.state.cartCount
            }})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"> </a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "jack",
      phoneList: [],
    };
  },

  mounted() {
    this.getProductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
  },
  filters: {
    currency(val) {
      if (!val) {
        return "0.00";
      } else {
        return "￥" + val.toFixed(2) + "元";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/config.scss";
.header {
  .nav-top {
    height: 39px;
    background-color: #333333;
    line-height: 39px;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }

      .my-cart {
        margin-right: 0px;
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-font {
          @include bgImg(
            16px,
            12px,
            "../../../public/imgs/icon-cart-checked.png",
            16px 12px
          );
          margin-right: 4px;
          vertical-align: middle;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
      height: 112px;
      .header-logo {
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &::before {
            content: "";
            display: inline-block;
            @include bgImg(
              55px,
              55px,
              "../../../public/imgs/mi-logo.png",
              55px
            );
            transition: margin 0.3s;
          }
          &::after {
            content: "";
            display: inline-block;
            @include bgImg(
              55px,
              55px,
              "../../../public/imgs/mi-home.png",
              55px
            );
          }
          &:hover::before {
            margin-left: -55px;
          }
        }
      }
      .header-menu {
        width: 634px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 9999;
            transition: all 0.5s;
            overflow: hidden;
            opacity: 0;
            height: 0;
            background-color: #ffffff;
            ul {
              .product {
                float: left;
                width: 16.6%;
                position: relative;
                height: 220px;
                line-height: 12px !important;
                &:before {
                  content: " ";
                  position: absolute;
                  top: 25px;
                  right: -10px;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before {
                  display: none;
                }
                a {
                  display: flex;
                  height: 100%;
                  flex-direction: column;
                  text-align: center;
                  justify-content: center;
                  font-size: 12px;
                  .pro-img {
                    img {
                      height: 110px;
                      width: auto;
                    }
                  }
                  .pro-name {
                    font-weight: 800;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price {
                    color: $colorA;
                  }
                }
              }
            }
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          input {
            border: none;
            width: 264px;
            border-right: 1px solid #e0e0e0;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url("../../../public/imgs/icon-search.png") no-repeat
              center;
            background-size: contain;
            margin-left: 14px;
          }
        }
      }
    }
  }
}
</style>
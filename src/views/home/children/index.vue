<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" alt="" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="item in adsList"
          :key="item.id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner-box">
        <a href="/#product/30"> <img v-lazy="'/imgs/banner-1.png'" alt="" /></a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div class="item" v-for="sub in item" :key="sub.id">
                <span :class="[sub.id % 2 == 0 ? classList[0] : classList[1]]"
                  >新品</span
                >
                <div class="item-img">
                  <img v-lazy="sub.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ sub.name }}</h3>
                  <p>{{ sub.subtitle }}</p>
                  <p class="price" @click="addCart(sub.id)">
                    {{ sub.price | currency }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      :title="'提示'"
      :sureText="'查看购物车'"
      :btntype="2"
      :modalType="'middle'"
      :showModal="showModal"
      v-on:cancel="showModal = false"
    >
      <template v-slot:body> <p>商品添加成功!</p> </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "../../../components/Home/ServiceBar.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Modal from "../../../components/modal.vue";
export default {
  components: { ServiceBar, swiper, swiperSlide, Modal },
  filters: {
    currency(val) {
      if (!val) {
        return "0.00";
      } else {
        return "￥" + val.toFixed(2) + "元";
      }
    },
  },

  data() {
    return {
      classList: ["new-pro", "kill-pro"],
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "48",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
      phoneList: [],
      showModal: false,
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    addCart(id) {
      this.showModal = true;
      return;
      this.axios
        .post("/cart", {
          data: {
            productId: id,
            selected: true,
          },
        })
        .then((res) => {})
        .catch((err) => {});
    },
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../../assets/scss/base.scss";
@import "../../../assets/scss/mixin.scss";
@import "../../../assets/scss/config.scss";
.index {
  .swiper-box {
    position: relative;
    .nav-menu {
      height: 451px;
      box-sizing: border-box;
      width: 264px;
      position: absolute;
      z-index: 999;
      padding: 26px 0;
      background-color: #55585a7a;
      .menu-wrapper {
        .menu-item {
          height: 50px;
          line-height: 50px;
          position: relative;
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          cursor: pointer;
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: -26px;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;

              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 20px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
          a {
            color: #fff;
            font-size: 16px;
            padding-left: 30px;
          }
          &::after {
            content: "";
            position: absolute;
            right: 30px;
            top: 17.5px;
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
        .item {
          width: 236px;
          height: 302px;
          background-color: $colorG;
          text-align: center;
          span {
            display: inline-block;
            width: 67px;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            color: #fff;
            &.new-pro {
              background-color: #7ecf68;
            }
            &.kill-pro {
              background-color: #e82626;
            }
          }
          .item-img {
            img {
              width: 100%;
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &::after {
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                content: "";
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .banner-left {
        margin-right: 16px;
        a {
          img {
            width: 214px;
            height: 619px;
          }
        }
      }
    }
  }
  .banner-box {
    margin-bottom: 50px;
  }

  .ads-box {
    margin-top: 14px;
    margin-bottom: 31px;
    @include flex();
    a {
      width: 296px;
      height: 167px;
    }
  }
}
</style>
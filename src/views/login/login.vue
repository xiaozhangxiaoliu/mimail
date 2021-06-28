<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"> <img src="/imgs/login-logo.png" alt="" /></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="title">
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn" @click="login"><a href="javascript:;">登录</a></div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <home-nav-footer></home-nav-footer>
  </div>
</template>

<script>
import homeNavFooter from "../../components/Home/homeNavFooter.vue";
export default {
  components: { homeNavFooter },
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
    register() {
      console.log(1);
    },
    login() {
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          username,
          password,
        })
        .then((res) => {
          console.log(res);
          this.$cookie.set("userId", res.id, { expires: "1M" });
        });
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  & > .container {
    height: 113px;
    img {
      height: 100%;
      width: auto;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      position: relative;
      .login-form {
        padding: 0 31px;
        box-sizing: border-box;
        width: 410px;
        height: 510px;
        position: absolute;
        background-color: #ffffff;
        right: 0;
        top: 29px;
        text-align: center;
        .title {
          margin: 40px auto 49px;
          font-size: 23px;
          line-height: 23px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            padding: 18px;
            width: 100%;
            height: 100%;
          }
        }
        .btn {
          width: 350px;
          a {
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            display: inline-block;
            height: 50px;
          }
        }
        .tips {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          .sms {
            color: #ff6600;
            font-size: 14px;
            cursor: pointer;
          }
          .reg {
            color: #999;
            font-size: 14px;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
}
</style>
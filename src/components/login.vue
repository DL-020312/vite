<template>
  <div class="main" style="display:grid;place-items:center;height:100vh">
    <div id="login_container" class="login-box"></div>
  </div>
</template>

<script>
import qs from "querystring";
// import { mapActions } from "vuex";
// sso 登录域名
const ssoBaseUrl = "http://sso-test.babycare.com";
const dtalkAppId = "dingoanf5lz7au69lo54ds";

export default {
  data() {
    return {
      dlc: {
        appid: dtalkAppId,
        redirect_uri: `${ssoBaseUrl}/auth/code`,
        response_type: "code",
        scope: "snsapi_login",
        state: ""
      }
    };
  },
  mounted() {
    this.initDDLogin();
  },
  methods: {
    initDDLogin() {
      const { redirect = window.location.origin } = this.$route.query;
      this.dlc.state = encodeURIComponent(redirect);
      var url =
        `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?` +
        qs.stringify(this.dlc);
      var encodeUrl = encodeURIComponent(url);
      // eslint-disable-next-line no-unused-vars
      const obj = DDLogin({
        id: "login_container", // 这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
        goto: encodeUrl,
        style: "background-color:#FFFFFF;",
        width: "300",
        height: "300"
      });
      var hanndleMessage = (event) => {
        var loginTmpCode = event.data; // 拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
        var origin = event.origin;
        if (origin !== "https://login.dingtalk.com") {
          return;
        }
        window.location.href = url + "&loginTmpCode=" + loginTmpCode;
      };
      if (typeof window.addEventListener !== "undefined") {
        window.addEventListener("message", hanndleMessage, false);
      } else if (typeof window.attachEvent !== "undefined") {
        window.attachEvent("onmessage", hanndleMessage);
      }
    },
  }
};
</script>

<style  scoped>
.login-box {
  text-align: center;
  background-color: none;
  margin-top: 30px;
}
</style>

import { createRouter, createWebHistory } from "vue-router";

import layout from "../components/layout.vue";
import Login from "../components/login.vue";
import B2Border from "../components/B2Border/index.vue";
import B2BList from "../components/B2Breturn/index.vue";
import home from "../components/home.vue";
import Cookies from "js-cookie";
import store from "../store/index";
import { useStore } from "vuex";
import request from "../utils/request";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home", children: [] },
    { path: "/home", name: "主页", component: home },
    { path: "/login", name: "login", component: Login },
  ],
});
const constRouter = [
  {
    path: "/orderB2B",
    name: "B2B管理",
    component: layout,
    children: [
      {
        path: "/orderB2B/b2border",
        name: "B2B退货单",
        component: B2Border,
      },
      {
        path: "/orderB2B/b2bList",
        name: "B2B出库单",
        component: B2BList,
      },
    ],
  },
];
let whiteList = ["/login"];
let token = Cookies.get("access_token");
router.beforeEach((to, form, next) => {
  // 如果token存在 不能跳转登录页
  // if (token && to.path === "/login") {
  //   next({
  //     path: form.fullPath,
  //   });
  // }
  // 在白名单直接跳转
  if (whiteList.includes(to.path)) {
    next();
  }
  // 拉取用户信息
  store.dispatch("GetInfo").then(async (res) => {
    const {data} = await request.get("/permit/users/getUserMenuFuncList?appId=1");
    const data2mapState = constRouter.reduce((temp,item)=>{
      data.forEach(Ditem=>{
        if(item.path  === Ditem.url){
          temp.push(Object.assign(item,Ditem))
        }
      })
      return temp
    },[])
    console.log(...data2mapState);
    router.addRoute(...data2mapState);
    next({
      path:"/login"
    })
  });
  // token校验
  if (token) next();
  else console.log("权限不存在");
});
export default router;

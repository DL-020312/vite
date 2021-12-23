import { createStore } from "vuex";
import request from "../utils/request.js";
import Cookies  from "js-cookie";
const store = createStore({
  state: {
    token: "",
    name: "",
    welcome: "",
    avatar: "",
    roles: [],
    info: {},
  },
  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_NAME: (state, avatar) => {
      state.name = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, data) => {
      state.permission = data;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
  },
  actions: {
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (!state.info.userId) {
          const token = Cookies.get("access_token");
          request
            .post("/sso/auth/check?token=" + token)
            .then(({ data }) => {
              if (data && data.userId) {
                commit("SET_NAME", { name: data.username });
                commit("SET_AVATAR", data.avatar);
                commit("SET_INFO", data);
                resolve(data);
              } else reject();
            });
        } else resolve(state.info);
      });
    },
  },
});
export default store;

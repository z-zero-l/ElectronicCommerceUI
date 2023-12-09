import VueAxios from "vue-axios";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 6000, // 请求超时时间
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzIjoxMjk2MDAwLCJsb2dpbkF0IjoxNzAxOTk1NTQ0Mjc0LCJ1c2VySWQiOjEzfQ.HegfN4EeYC-onQXY5lFLvQCbXsTAiA4WaUmRpKoz0zY",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发送请求前拦截判定
    let pathname = location.pathname;
    // 是否登录
    if (localStorage.getItem("token")) {
      // 首页无需token
      if (pathname != "/") {
        // header内添加token
        console.log("header添加token");
        config.headers.common["token"] = localStorage.getItem("token");
      }
    }
    return config;
  },
  (error) => {
    // 请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("响应成功");
    return response;
  },
  (error) => {
    console.log("响应error");
    if (error.response) {
      switch (error.response.status) {
        // 返回401，清除token信息并跳转到登录页面
        case 401:
          localStorage.removeItem("token");
          router.replace({
            path: "/login",
            //登录成功后跳入浏览的当前页面
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
      }
      // 返回接口返回的错误信息
      return Promise.reject(error.response.data);
    }
  }
);

export default service;

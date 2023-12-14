import VueAxios from "vue-axios";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 6000, // 请求超时时间
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 是否登录
    if (localStorage.getItem("token")) {
      // header内添加token
      config.headers["Authorization"] = localStorage.getItem("token");
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
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.data.code) {
        // 返回401，清除token信息并跳转到登录页面
        case 401:
          localStorage.removeItem("token");
          break;
        case 500:
          console.log(error.response.data.msg);
          break;
      }
      // 返回接口返回的错误信息
      return Promise.reject(error.response.data);
    }
  }
);

export default service;

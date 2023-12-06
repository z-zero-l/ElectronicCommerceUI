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

// 响应拦截器

export default service;

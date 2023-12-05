import VueAxios from "vue-axios";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 6000, // 请求超时时间
});

export default service;

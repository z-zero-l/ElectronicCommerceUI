import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 引入css文件
// import "./style.css";

// 引入scss文件
import "./assets/style.scss";
// 引入bootstrap
import "@popperjs/core";
import * as bootstrap from "bootstrap";

// 引入vue-axios
import axios from "axios";
import VueAxios from "vue-axios";

// 引入router
import router from "./router";

// 引入pinia
import { createPinia } from "pinia";
const pinia = createPinia();

app.use(VueAxios, axios).use(router).use(pinia).mount("#app");

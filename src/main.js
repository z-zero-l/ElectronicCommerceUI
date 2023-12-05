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

// 引入bootstrap CSS
import "@/assets/css/bootstrap.min.css";
// 引入Font-Awesome CSS
import "@/assets/css/font-awesome.min.css";
// 引入IonIcon CSS
import "@/assets/css/ionicons.min.css";
// 引入helper class CSS
import "@/assets/css/helper.min.css";
// 引入Plugins CSS
import "@/assets/css/plugins.css";
// 引入Main Style CSS
import "@/assets/css/style.css";
//
import "@/assets/img/favicon.ico"

app.use(VueAxios, axios).use(router).use(pinia).mount("#app");

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 默认路径重定向至首页
    { path: "/", redirect: "/info" },
    // 首页
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/index/index.vue"),
    },
    // 登录注册忘记密码
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/login/register.vue"),
    },
    {
      path: "/forget",
      name: "forget",
      component: () => import("@/views/login/forget.vue"),
    },
    // 个人信息
    {
      path: "/info",
      name: "info",
      component: () => import("@/views/info/info.vue"),
    },
    // 购物车
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/cart/cart.vue"),
    },
    // 订单
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/order/info",
      component: () => import("@/views/order/orderInfo.vue"),
    },
    // 地址
    {
      path: "/address",
      name: "address",
      component: () => import("@/views/address/address.vue"),
    },
    // 收藏
    {
      path: "/collect",
      name: "collect",
      component: () => import("@/views/collect/collect.vue"),
    },
    // 商品
    {
      path: "/product",
      name: "product",
      component: () => import("@/views/product/product.vue"),
    },
    // 搜索
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/search/search.vue"),
    },
    // 分类
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/category/category.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 默认路径重定向至首页
    { path: "/", redirect: "/index" },
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
      name: "orderInfo",
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
      path: "/product/:id",
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
    // 店铺信息
    {
      path: "/business/:id",
      name: "business",
      component: () => import("@/views/business/business.vue"),
    },
  ],
});

// 全局路由守卫;
router.beforeEach((to, from, next) => {
  const nextRoute = [
    "info",
    "product",
    "category",
    "collect",
    "order",
    "cart",
    "search",
    "address",
  ];
  let isLogin = localStorage.getItem("token");
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0 && !isLogin) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
  // 已登录状态；当路由到login时，跳转至index
  if (to.name === "login") {
    if (isLogin) {
      router.push("/index");
    }
  }
});

export default router;

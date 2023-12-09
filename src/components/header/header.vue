<script setup>
import service from "@/utils/request.js";
import { onMounted, ref } from "vue";

onMounted(() => {
  getAvatar()
  window.addEventListener('scroll', handleScroll);
});

// 滚动样式
const isSticky = ref(false);
const handleScroll = () => {
  const scroll = window.scrollY || window.pageYOffset;
  // 根据滚动高度判断是否添加或移除样式
  isSticky.value = scroll >= 300;
};

// 获取用户头像
const avatar = ref("")
const getAvatar = async () => {
  service.get("/user/profile/avatar").then((res) => {
    avatar.value = res.data.data
  });
};

// 判断登录状态
const isLogin = !window.localStorage.getItem("token") ? true : false
</script>

<template>
  <!-- header area start -->
  <header>
    <!-- main menu area start -->
    <div class="header-main transparent-menu sticky" :class="{ 'is-sticky': isSticky }">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="logo">
              <router-link to="/index">
                <a href="#">
                  <img src="@/assets/img/logo/logo.png" alt="Brand logo">
                </a>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <div class="main-header-inner">
              <div class="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <div style="width: 18%;">
                      <router-link to="/">
                        <li><a href="#">首 页 <i class="bi bi-house-door-fill"></i></a>
                        </li>
                      </router-link>
                    </div>
                    <div style="width: 15%;">
                      <router-link to="/category">
                        <li class="static"><a href="#">分 类 <i class="bi bi-caret-down-fill"></i></a></li>
                      </router-link>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/cart">
                        <li><a href="#">购物车<i class="bi bi-cart4"></i><!-- <i class="bi bi-cart"></i> --></a>
                        </li>
                      </router-link>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/collect">
                        <li><a href="#">收 藏 <i class="bi bi-calendar-heart"></i></a></li>
                      </router-link>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/order">
                        <li><a href="contact-us.html">订 单<i class="bi bi-list"></i></a></li>
                      </router-link>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6 ml-auto">
            <div class="header-setting-option" style="margin-left: 30px;">
              <div class="search-wrap">
                <router-link to="/search">
                <button type="submit" class="search-trigger"><i class="ion-ios-search-strong"></i>
                </button>
              </router-link>
              </div>
              <div class="settings-top">
                <router-link to="/address">
                  <div class="settings-btn">
                    <i class="ion-android-settings"></i>
                  </div>
                </router-link>
              </div>
              <div class="header-mini-cart" style="margin-left: 20px;">
                <div v-if="isLogin">
                  <router-link to="/info"><img :src="avatar" class="img-thumbnail rounded-5"
                      style="height: 35px; width: 35px;"></router-link>
                </div>
                <div v-else class="justify-content-center">
                  <router-link to="/login">
                    <a href="#" class="forget-pwd fs-3">Sign in<i class="bi bi-arrow-right-short"></i></a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-block d-lg-none">
          <div class="mobile-menu"></div>
        </div>
      </div>
    </div>
    <!-- main menu area end -->
  </header>
  <!-- header area end -->
</template>

<style scoped></style>

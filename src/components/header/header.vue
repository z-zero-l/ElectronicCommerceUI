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

// 标签颜色
const activeIndex = ref(0)
function changeColor(index) {
  activeIndex.value = index
}

// 获取用户头像
const avatar = ref("")
const getAvatar = async () => {
  service.post("user/profile/avatar").then((res) => {
    avatar.value = res.data
  });
};

const isLogin = window.localStorage.getItem("token") ? true : false
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
              <router-link to="/">
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
                      <router-link to="/" @click="changeColor(1)">
                        <li :class="'activeIndex===1' ? 'active' : ''"><a href="#">首 页 <i
                              class="bi bi-house-door-fill"></i></a>
                        </li>
                      </router-link>
                    </div>
                    <div style="width: 15%;">
                      <li class="static"><a href="#">分 类 <i class="bi bi-caret-down-fill"></i></a>
                        <ul class="megamenu dropdown">
                          <li class="mega-title"><a href="#">column 01</a>
                            <ul>
                              <li><a href="shop-grid-left-sidebar.html">shop grid left
                                  sidebar</a></li>
                              <li><a href="shop-grid-right-sidebar.html">shop grid right
                                  sidebar</a></li>
                              <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                              <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                            </ul>
                          </li>
                          <li class="mega-title"><a href="#">column 02</a>
                            <ul>
                              <li><a href="product-details.html">product details</a></li>
                              <li><a href="product-details-affiliate.html">product
                                  details
                                  affiliate</a></li>
                              <li><a href="product-details-variable.html">product details
                                  variable</a></li>
                              <li><a href="product-details-group.html">product details
                                  group</a></li>
                            </ul>
                          </li>
                          <li class="mega-title"><a href="#">column 03</a>
                            <ul>
                              <li><a href="cart.html">cart</a></li>
                              <li><a href="checkout.html">checkout</a></li>
                              <li><a href="compare.html">compare</a></li>
                              <li><a href="wishlist.html">wishlist</a></li>
                            </ul>
                          </li>
                          <li class="mega-title"><a href="#">column 04</a>
                            <ul>
                              <li><a href="my-account.html">my-account</a></li>
                              <li><a href="login-register.html">login-register</a></li>
                              <li><a href="about-us.html">about us</a></li>
                              <li><a href="contact-us.html">contact us</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/cart" @click="changeColor(3)">
                        <li :class="'activeIndex===3' ? 'active' : ''"><a href="#">购物车<i
                              class="bi bi-cart4"></i><!-- <i class="bi bi-cart"></i> --></a>
                        </li>
                      </router-link>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/collect" @click="changeColor(4)">
                        <li :class="'activeIndex===4' ? 'active' : ''"><a href="#">收 藏 <i
                              class="bi bi-calendar-heart"></i></a></li>
                      </router-link>
                    </div>
                    <div style="width: 18%;">
                      <router-link to="/order" @click="changeColor(5)">
                        <li :class="'activeIndex===5' ? 'active' : ''"><a href="contact-us.html">订 单<i
                              class="bi bi-list"></i></a></li>
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
                <button type="submit" class="search-trigger"><i class="ion-ios-search-strong"></i>
                </button>
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

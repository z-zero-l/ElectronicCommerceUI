<script setup>
</script>

<template>
  <!-- header area start -->
  <header>
    <!-- main menu area start -->
    <div class="header-main transparent-menu sticky">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="logo">
              <a href="index.html">
                <img src="@/assets/img/logo/logo.png" alt="Brand logo">
              </a>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <div class="main-header-inner">
              <div class="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li class="active"><a href="#">首 页 <i class="bi bi-house-door-fill"></i></a>
                    </li>
                    <li class="static"><a href="#">分 类 <i class="bi bi-caret-down-fill"></i></a>
                      <!-- <li class="static"><a href="#">分 类 <i class="bi bi-caret-down"></i></a> -->
                      <!-- <li class="static"><a href="#">分 类 <i class="bi bi-chevron-down"></i></a> -->
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
                    <li><a href="#">购物车 <i class="bi bi-cart4"></i></a>
                      <!-- <li><a href="#">购物车 <i class="bi bi-cart"></i></a> -->
                      
                    </li>
                    <li><a href="#">收 藏 <i class="bi bi-calendar-heart"></i></a></li>
                    <li><a href="contact-us.html">订 单<i class="bi bi-list"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6 ml-auto">
            <div class="header-setting-option">
              <div class="search-wrap">
                <button type="submit" class="search-trigger"><i class="ion-ios-search-strong"></i></button>
              </div>
              <!-- <div class="header-mini-cart">
                <div class="mini-cart-btn">
                  <i class="ion-bag"></i>
                  <span class="cart-notification">2</span>
                </div>
              </div> -->
              <div class="settings-top">
                <div class="settings-btn">
                  <i class="ion-android-settings"></i>
                </div>

              </div>
            </div>
          </div>
          <div class="col-12 d-block d-lg-none">
            <div class="mobile-menu"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- main menu area end -->

    <!-- Start Search Popup -->
    <div class="box-search-content search_active block-bg close__top">
      <form class="minisearch" action="#">
        <div class="field__search">
          <input type="text" placeholder="Search Our Catalog">
          <div class="action">
            <a href="#"><i class="fa fa-search"></i></a>
          </div>
        </div>
      </form>
      <div class="close__wrap">
        <span>close</span>
      </div>
    </div>
    <!-- End Search Popup -->

  </header>
  <!-- header area end -->
</template>

<style scoped></style>

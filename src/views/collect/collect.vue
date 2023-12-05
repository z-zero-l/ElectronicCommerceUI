<script setup>
import CollectItem from "@/components/product/collectItem.vue"
</script>
<template>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <div class="row">
        <div class="col-xl-3 col-lg-4 order-2 order-lg-1 mt-20">
          <div class="sidebar-wrapper mt-md-100 mt-sm-48">
            <!-- single sidebar start -->
            <div class="sidebar-single">
              <div class="sidebar-title">
                <h3>shop</h3>
              </div>
              <div class="sidebar-body">
                <ul class="sidebar-category">
                  <li><a href="#">health & beauty</a>
                    <ul class="children">
                      <li><a href="#">skateboard</a></li>
                      <li><a href="#">surfboard</a></li>
                      <li><a href="#">accessories</a></li>
                    </ul>
                  </li>
                  <li><a href="#">makeup</a>
                    <ul class="children">
                      <li><a href="#">Samsome</a></li>
                      <li><a href="#">GL Stylus</a></li>
                      <li><a href="#">Uawei</a></li>
                      <li><a href="#">Cherry Berry</a></li>
                    </ul>
                  </li>
                  <li><a href="#">skincare</a>
                    <ul class="children">
                      <li><a href="#">Power Bank</a></li>
                      <li><a href="#">Data Cable</a></li>
                      <li><a href="#">Power Cable</a></li>
                      <li><a href="#">Battery</a></li>
                    </ul>
                  </li>
                  <li><a href="#">jewelry</a>
                    <ul class="children">
                      <li><a href="#">Desktop Headphone</a></li>
                      <li><a href="#">Mobile Headphone</a></li>
                      <li><a href="#">Wireless Headphone</a></li>
                      <li><a href="#">LED Headphone</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <!-- single sidebar end -->
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 order-1 order-lg-2">
          <div class="shop-product-wrapper" data-target="list">
            <div class="shop-product-wrap row list">
              <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                <CollectItem v-for="item in 6"></CollectItem>
              </div>
            </div>

          </div>
          <!-- start pagination area -->
          <div class="paginatoin-area text-center mt-18">
            <ul class="pagination-box">
              <li><a class="Previous" href="#">Previous</a></li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a class="Next" href="#"> Next </a></li>
            </ul>
          </div>
          <!-- end pagination area -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
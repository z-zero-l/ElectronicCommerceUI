<script setup>
import ProductItem from "@/components/product/productItem.vue"
import Carousel from "@/components/carousel/carousel.vue"
</script>

<template>
    <!-- slider area start -->
    <Carousel></Carousel>
    <!-- slider area end -->
       <!-- banner statistics 01 start -->
       <div class="banner-statistic-one bg-gray pt-100 pb-100 pt-sm-58 pb-sm-58">
        <div class="container">
          
            <div class="row">
                <div class="col1 col-sm-6">
                    <div class="img-container img-full fix">
                        <a href="#">
                            <img src="@/assets/img/banner/banner-1.jpg" alt="banner image">
                        </a>
                    </div>
                </div>
                <div class="col2 col-sm-6">
                    <div class="img-container img-full fix">
                        <a href="#">
                            <img src="@/assets/img/banner/banner-2.jpg" alt="banner image">
                        </a>
                    </div>
                </div>
                <div class="col3 col">
                    <div class="img-container img-full fix mb-30">
                        <a href="#">
                            <img src="@/assets/img/banner/banner-3.jpg" alt="banner image">
                        </a>
                    </div>
                    <div class="img-container img-full fix">
                        <a href="#">
                            <img src="@/assets/img/banner/banner-4.jpg" alt="banner image">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- banner statistics 01 end -->
  <div class="page-section pt-100 pb-14 pt-sm-60 pb-sm-0">
    <div class="container">
      <div class="row">
                <div class="col-12">
                    <div class="section-title text-center pb-44">
                        <p>The latest featured products</p>
                        <h2>Featured products</h2>
                    </div>
                </div>
            </div>
      <div class="row product-carousel-one spt slick-arrow-style" data-row="2" v-for="item in 4">
        <ProductItem v-for="item in 4"></ProductItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

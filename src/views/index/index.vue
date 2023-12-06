<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
// 组件引入
import ProductItem from "@/components/product/productItem.vue";
import Carousel from "@/components/carousel/carousel.vue";

// 每行展示商品数
const rowItemSize = ref(4)

// 初始化后执行
onMounted(() => {
  selectProductList();
  selectCarouselList();
});

// 获取轮播图列表
const carouselList = ref([]);
const selectCarouselList = async () => {
  service.get("carousel/list").then((res) => {
    carouselList.value = res.data;
    console.log(carouselList.value);
  });
};

// 获取商品列表
const productList = ref([]);
const selectProductList = async () => {
  service.get("product/list").then((res) => {
    productList.value = res.data;
    console.log(productList.value.length);
  });
};

const productListTest=productList.value.splice(0,4)
</script>

<template>
  <!-- slider area start -->
  <Carousel :carouselList="carouselList"></Carousel>
  <!-- slider area end -->
  <!-- banner statistics 01 start -->
  <div class="banner-statistic-one bg-gray pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container">
      <div class="row">
        <div class="col1 col-sm-6">
          <div class="img-container img-full fix">
            <a href="#">
              <img src="@/assets/img/banner/banner-1.jpg" alt="banner image" />
            </a>
          </div>
        </div>
        <div class="col2 col-sm-6">
          <div class="img-container img-full fix">
            <a href="#">
              <img src="@/assets/img/banner/banner-2.jpg" alt="banner image" />
            </a>
          </div>
        </div>
        <div class="col3 col">
          <div class="img-container img-full fix mb-30">
            <a href="#">
              <img src="@/assets/img/banner/banner-3.jpg" alt="banner image" />
            </a>
          </div>
          <div class="img-container img-full fix">
            <a href="#">
              <img src="@/assets/img/banner/banner-4.jpg" alt="banner image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- banner statistics 01 end -->
  <div class="page-section pt-100 pb-14 pt-sm-60 pb-sm-0">
    <div class="container">
      <div class="row product-carousel-one spt slick-arrow-style" v-for="r in parseInt(productList.length / rowItemSize)">
        <!-- <ProductItem v-for="i in rowItemSize" :productItem="productList.value[rowItemSize*4+i]"></ProductItem> -->
        <ProductItem v-for="i in rowItemSize" :productItem="productListTest"></ProductItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

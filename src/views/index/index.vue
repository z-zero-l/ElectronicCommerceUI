<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
// 组件引入
import IndexItem from "@/components/product/indexItem.vue";
import Carousel from "@/components/carousel/carousel.vue";

// 初始化后执行
onMounted(() => {
  selectProductList();
  selectCarouselList();
});

// 获取轮播图列表
const carouselList = ref([]);
const selectCarouselList = async () => {
  service.get("/carousel/list").then((res) => {
    carouselList.value = res.data;
  });
};

// 获取商品列表
const productList = ref([]);
const selectProductList = async () => {
  service.get("/product/indexList").then((res) => {
    productList.value = res.data.data;
    console.log(productList.value);
  });
};
</script>

<template>
  <Carousel :carouselList="carouselList"></Carousel>

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
      <IndexItem :productList="productList"></IndexItem>
    </div>
  </div>
</template>

<style scoped></style>

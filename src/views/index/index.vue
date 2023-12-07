<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
// 组件引入
import ProductItem from "@/components/product/productItem.vue";
import Carousel from "@/components/carousel/carousel.vue";

// 每行展示商品数
const rowItemSize = ref(4);

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
  });
};

// 获取商品列表
const productList = ref([]);
const selectProductList = async () => {
  service.get("product/list").then((res) => {
    productList.value = res.data;
    console.log(productList.value);
  });
};

let productRowList = ref([]);
function getProductRowList(r) {
  productRowList.value = productList.value.slice(4 * (r - 1), 4 * (r - 1) + 4);
  console.log(productRowList.value);
  return productRowList.value;
}
</script>

<template>
  <!-- slider area start -->
  <Carousel :carouselList="carouselList"></Carousel>
  <!-- slider area end -->

  <!-- featured product area start -->
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
      <div
        class="row product-carousel-one spt slick-arrow-style"
        v-for="r in parseInt(productList.length / rowItemSize)"
        :key="r"
      >
        <template v-for="item in getProductRowList(r)" :key="item.productId">
          <ProductItem :productItem="item"></ProductItem>
        </template>
      </div>
    </div>
  </div>
  <!-- featured product area end -->
</template>

<style scoped></style>

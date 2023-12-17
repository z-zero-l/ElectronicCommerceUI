<script setup>
import { ref } from "vue";
// 组件传参接收
const props = defineProps({ productList: Array });
// 每行展示商品数
const rowItemSize = ref(4);
</script>

<template>
  <div class="row product-carousel-one spt slick-arrow-style"
    v-for="r in (parseInt(productList.length / rowItemSize) + 1)" :key="r">
    <div class="col-3 mt-3" v-for="product in props.productList.slice(4 * (r - 1), 4 * (r - 1) + 4)" :key="product.productId">
      <div class="product-item mb-20" style="max-width: 90%; ">
        <div class="product-thumb">
          <a href="product-details.html">
            <img :src="product.productCover" alt="product image">
          </a>
        </div>
        <div class="product-description text-center">
          <div class="product-name">
            <h3 style="font-size: 14px; padding: 0;"><a href="product-details.html">{{product.productName}}</a></h3>
          </div>
          <div class="price-box ">
            <span class="old-price ">￥{{ product.price }}</span>
            <span class="old-price">{{ product.totalSaleAmount }} 人已付款</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
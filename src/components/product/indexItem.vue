<script setup>
import { ref } from "vue";
// 组件传参接收
const props = defineProps({ productList: Array });
// 每行展示商品数
const rowItemSize = ref(4);
</script>

<template>
  <div class="row product-carousel-one spt slick-arrow-style"
    v-for="r in parseInt(props.productList.length / rowItemSize)" :key="r">
    <div class="col" v-for="product in props.productList.slice(4 * (r - 1), 4 * (r - 1) + 4)" :key="product.productId">
      <router-link :to="'/product/' + product.productId">
        <div class="product-item mb-20">
          <div class="product-thumb">
            <div class="product-img">
              <a href="#">
                <img :src="product.productCover" alt="product image" class="obj-fit w-75 h-75" />
              </a>
            </div>
            <div class="box-label">
              <div class="product-label freight" v-if="product.freight === 0.0">
                <span>Free Shipping</span>
              </div>
              <div class="product-label new" v-if="product.isNew">
                <span>new</span>
              </div>
              <div class="product-label discount" v-if="product.isHot">
                <span>Hot</span>
              </div>
              <div class="product-label bg-warning" v-if="product.isSale">
                <span>Sale</span>
              </div>
            </div>
            <div class="product-action-link">
              <a href="#" data-toggle="modal" data-target="#quick_view">
                <span data-toggle="tooltip" data-placement="left" title="Quick view"><i
                    class="ion-ios-eye-outline"></i></span>
              </a>
              <!-- <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i class="ion-ios-loop"></i></a> -->
              <!-- <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i class="ion-ios-shuffle"></i></a> -->
            </div>
          </div>
          <div class="product-description text-center">
            <div class="manufacturer">
              <router-link :to="'/business/' + product.businessId">
                <p>
                  <a href="#">{{ product.business }}</a>
                </p>
              </router-link>
            </div>
            <div class="product-name">
              <h3>
                <a href="#">{{ product.productName }}</a>
              </h3>
            </div>
            <div class="price-box">
              <span class="regular-price">￥{{ product.price }}</span>
              <span class="old-price">{{ product.totalSaleAmount }} 人已付款</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.obj-fit {
  object-fit: cover;
}
</style>

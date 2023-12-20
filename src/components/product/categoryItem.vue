<script setup>
// 组件传参接收
const props = defineProps({ categoryItem: Object });
</script>

<template>
  <div class="col-3 mt-3">
    <router-link :to="'/product/' + props.categoryItem.productId">
      <div class="product-item mb-20">
        <div class="product-thumb">
          <div class="product-img">
            <a href="#">
              <img
                :src="props.categoryItem.productCover"
                alt="product image"
                class="obj-fit w-75 h-75"
              />
            </a>
          </div>
        </div>
        <div class="product-description text-center">
          <div class="manufacturer">
            <router-link :to="'/business/' + props.categoryItem.businessId">
              <p>
                <a href="#">{{ props.categoryItem.business }}</a>
              </p>
            </router-link>
          </div>
          <div class="product-name">
            <h3>
              <a href="#">{{ props.categoryItem.productName }}</a>
            </h3>
          </div>
          <div class="price-box">
            <span class="regular-price">￥{{ props.categoryItem.price }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped></style>
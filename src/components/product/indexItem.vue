<script setup>
const props = defineProps({ productItem: Object })
</script>

<template>
  <div class="col">
    <router-link :to="'/product/'+props.productItem.productId">
    <div class="product-item mb-20">
      <div class="product-thumb">
        <div class="product-img">
          <a href="product-details.html">
          <img :src="props.productItem.productCover" alt="product image" class="obj-fit w-75 h-75">
        </a>
        </div>
        <div class="box-label">
          <div class="product-label freight" v-if="props.productItem.freight===0.0">
            <span>Free Shipping</span>
          </div>
          <div class="product-label new" v-if="props.productItem.isNew">
            <span>new</span>
          </div>
          <div class="product-label discount" v-if="props.productItem.isHot">
            <span>Hot</span>
          </div>
          <div class="product-label bg-warning"  v-if="props.productItem.isSale">
            <span>Sale</span>
          </div>
        </div>
        <div class="product-action-link">
          <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left"
              title="Quick view"><i class="ion-ios-eye-outline"></i></span> </a>
          <!-- <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i class="ion-ios-loop"></i></a>
          <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i class="ion-ios-shuffle"></i></a> -->
        </div>
      </div>
      <div class="product-description text-center">
        <div class="manufacturer">
          <router-link :to="'/business/'+props.productItem.businessId">
          <p><a href="product-details.html">{{props.productItem.business}}</a></p>
          </router-link>
        </div>
        <div class="product-name">
          <h3><a href="product-details.html">{{props.productItem.productName}}</a></h3>
        </div>
        <div class="price-box">
          <span class="regular-price">￥{{props.productItem.price}}</span>
          <span class="old-price">10000+人付款</span>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<style scoped>
.obj-fit{
  object-fit: cover;



























}</style>
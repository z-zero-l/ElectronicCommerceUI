<script setup>
import { defineProps } from 'vue'
const props = defineProps({ productItem: Object })
</script>

<template>
  <div class="col">
    <div class="product-item mb-20">
      <div class="product-thumb">
        <a href="product-details.html">
          <img src="@/assets/img/product/product-1.jpg" alt="product image">
        </a>
        <div class="box-label">
          <div class="product-label new">
            <span>new</span>
          </div>
          <div class="product-label discount">
            <span>-5%</span>
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
          <p><a href="product-details.html">Fashion Manufacturer</a></p>
        </div>
        <div class="product-name">
          <h3><a href="product-details.html">Endeavor Daytrip</a></h3>
        </div>
        <div class="price-box">
          <span class="regular-price">$100.00</span>
          <span class="old-price"><del>$120.00</del></span>
        </div>
        <div class="product-btn">
          <a href="#"><i class="ion-bag"></i>Add to cart</a>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
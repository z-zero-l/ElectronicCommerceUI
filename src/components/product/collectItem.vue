<script setup>
</script>

<template>
  <!-- product list item start -->
  <div class="product-list-item mb-20">
    <div class="product-thumb">
      <a href="product-details.html">
        <img src="@/assets/img/product/product-5.jpg" alt="product image">
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
      </div>
    </div>
    <div class="product-list-content">
      <h4><a href="#">Fashion Manufacturer</a></h4>
      <h3><a href="product-details.html">Crown Summit Backpacks</a></h3>
      <div class="pricebox">
        <span class="regular-price">$70.00</span>
        <span class="old-price"><del>$90.00</del></span>
      </div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui.
        In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit.</p>
      <!-- <div class="product-btn product-btn__color"> -->
        <div class="fs-4 text-danger"><i class="bi bi-heart-fill "></i></div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped></style>
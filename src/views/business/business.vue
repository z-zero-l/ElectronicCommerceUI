<script setup>
import BusinessItem from '../../components/product/businessItem.vue';
</script>
<template>
  <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-9 col-md-8"></div>
          <div class="myaccount-content">
            <div style="display: flex;justify-content: space-between;">
              <div style="display: flex; ">
                <img class="img-thumbnail" src="@/assets/img/cart/cart-1.jpg"
                  style="border-radius: 50%;width: 80px; height: 80px;">
                <h3 style="padding: 26px 8px 10px 10px ">王家学姐</h3>
              </div>
              <div style="">
                <form style="margin-top: 20px ">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="bi bi-search"></i></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <p class="saved-message">店铺介绍 <br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse
              ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
          </div>
        </div>
      </div>
      <div class="row product-carousel-one spt slick-arrow-style" data-row="2" v-for="i in 4">
        <BusinessItem v-for="i in 4"></BusinessItem>
      </div>
    </div>

  </div>
</template>

<style scoped></style>

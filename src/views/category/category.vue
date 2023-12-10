<script setup>
import CategoryItem from '../../components/product/categoryItem.vue';
</script>
<template>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 ">
    <div class="container mt-20">
      <div class="d-flex align-items-start">
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
              type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
              type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
              type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
              type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
          </div>
          <div class="tab-content ml-3" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div v-for="i in 2">
                <h6 class="my-2">
                  <span>女装</span>
                  <a href="#" class="forget-pwd float-end" style="font-size: 14px;">全部<i
                      class="bi bi-arrow-right-short"></i></a>
                </h6>
                <div class="row product-carousel-one spt slick-arrow-style" data-row="2"
                  style="border-top: 1px #808080 dashed;">
                  <CategoryItem v-for="i in 4"></CategoryItem>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div v-for="i in 4">
                <h6 class="my-2">
                  <span>女装</span>
                  <a href="#" class="forget-pwd float-end" style="font-size: 14px;">全部<i
                      class="bi bi-arrow-right-short"></i></a>
                </h6>
                <div class="row product-carousel-one spt slick-arrow-style" data-row="2"
                  style="border-top: 1px #808080 dashed;">
                  <CategoryItem v-for="i in 4"></CategoryItem>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div v-for="i in 4">
                <h6 class="my-2">
                  <span>女装</span>
                  <a href="#" class="forget-pwd float-end" style="font-size: 14px;">全部<i
                      class="bi bi-arrow-right-short"></i></a>
                </h6>
                <div class="row product-carousel-one spt slick-arrow-style" data-row="2"
                  style="border-top: 1px #808080 dashed;">
                  <CategoryItem v-for="i in 4"></CategoryItem>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <div v-for="i in 4">
                <h6 class="my-2">
                  <span>女装</span>
                  <a href="#" class="forget-pwd float-end" style="font-size: 14px;">全部<i
                      class="bi bi-arrow-right-short"></i></a>
                </h6>
                <div class="row product-carousel-one spt slick-arrow-style" data-row="2"
                  style="border-top: 1px #808080 dashed;">
                  <CategoryItem v-for="i in 4"></CategoryItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}

.nav .active {
  background-color: #ff7e67;
  color: #fff;
}
</style>

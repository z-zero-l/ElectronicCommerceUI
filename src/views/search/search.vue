<script setup>
import BusinessItem from '@/components/search/businessItem.vue';
import ProductItem from '@/components/search/productItem.vue';
</script>

<template>
  <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form style="width: 50%;margin:10px auto;">
            <div class="input-group" style="height: 50px;">
              <input type="text" class="form-control" style="height: 100%;" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
              </div>
            </div>
          </form>
          <nav>
        <div class="nav nav-tabs " id="nav-tab" role="tablist">
          <button class="nav-link" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
            role="tab" aria-controls="nav-all" aria-selected="false">店铺</button>
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
            role="tab" aria-controls="nav-home" aria-selected="true">商品</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
            role="tab" aria-controls="nav-profile" aria-selected="false">分类</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
          <!-- Single Tab Content Start -->
          <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <BusinessItem  v-for="i in 2"></BusinessItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <!-- Single Tab Content Start -->
          <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <div class="row" v-for="i in 2">
                <ProductItem  v-for="i in 4"></ProductItem>
              </div>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
           <!-- Single Tab Content Start -->
           <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <div class="row" v-for="i in 2">
                <ProductItem  v-for="i in 4"></ProductItem>
              </div>
            </div>
          </div>
          <!-- Single Tab Content End -->
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group-text:hover{
  background-color:  #ff7e67;
  color:white;
  cursor: pointer;
}
.nav-tabs .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}
.nav-tabs .active {
  background-color: #ff7e67;
  color: #fff;
  border: #ff7e67 solid 1px;
}
</style>

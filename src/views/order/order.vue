<script setup>
import OrderListItem from '@/components/order/orderListItem.vue'
import { ref } from 'vue'

const orderList = ref([])
</script>

<template>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 ">
    <div class="container mt-20">
      <nav>
        <div class="nav nav-tabs " id="nav-tab" role="tablist">
          <button class="nav-link" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
            role="tab" aria-controls="nav-all" aria-selected="false">全部</button>
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
            role="tab" aria-controls="nav-home" aria-selected="true">待支付</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
            role="tab" aria-controls="nav-profile" aria-selected="false">待发货</button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button"
            role="tab" aria-controls="nav-contact" aria-selected="false">待收货</button>
          <button class="nav-link" id="nav-pingjia-tab" data-bs-toggle="tab" data-bs-target="#nav-pingjia" type="button"
            role="tab" aria-controls="nav-pingjia" aria-selected="false">待评价</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
          <!-- Single Tab Content Start -->
          <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <OrderListItem  v-for="i in 2"></OrderListItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <!-- Single Tab Content Start -->
          <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <OrderListItem  v-for="i in 4"></OrderListItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
           <!-- Single Tab Content Start -->
           <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <OrderListItem  v-for="i in 4"></OrderListItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
           <!-- Single Tab Content Start -->
           <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <OrderListItem  v-for="i in 4"></OrderListItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        <div class="tab-pane fade" id="nav-pingjia" role="tabpanel" aria-labelledby="nav-pingjia-tab">
           <!-- Single Tab Content Start -->
           <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
            <div class="myaccount-content">
              <!-- <OrderListItem :orderListItem="orderListItem" v-for="orderListItem in orderList"></OrderListItem> -->
              <OrderListItem  v-for="i in 4"></OrderListItem>
            </div>
          </div>
          <!-- Single Tab Content End -->
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-tabs {
  border: 0;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .active {
  background-color: #ff7e67;
  color: #fff;
  border: #ff7e67 solid 1px;
}

.myaccount-content {
  border: 1px solid #ff7e67;
  margin-top: 1px;
}

</style>

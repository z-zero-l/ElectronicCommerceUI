<script setup>
import { ref, onMounted } from "vue";
import service from "@/utils/request.js";
// 组件引入
import OrderListItem from "@/components/order/orderListItem.vue";

onMounted(() => {
  getOrderList(0);
});

// 获取订单详情
const orderList = ref([]);
const getOrderList = async (status) => {
  if(status ==undefined){
    service.get("/order/list?status=").then((res) => {
    orderList.value = res.data.data;
  });
  }else{
    service.get("/order/list?status=" + status).then((res) => {
    orderList.value = res.data.data;
  });
  }
};
</script>

<template>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <nav>
        <div class="nav nav-tabs" role="tablist">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            @click="getOrderList()"
          >
            全部
          </button>
          <button
            class="nav-link active"
            data-bs-toggle="tab"
            role="tab"
            @click="getOrderList(0)"
          >
            待支付
          </button>
          <button
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            @click="getOrderList(1)"
          >
            待发货
          </button>
          <button
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            @click="getOrderList(2)"
          >
            待收货
          </button>
          <button
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            @click="getOrderList(3)"
          >
            待评价
          </button>
        </div>
      </nav>
      <div class="tab-content">
        <div class="tab-pane fade show active" role="tabpanel">
          <div class="myaccount-content">
            <OrderListItem
              v-for="orderListItem in orderList"
              :orderListItem="orderListItem"
            ></OrderListItem>
          </div>
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

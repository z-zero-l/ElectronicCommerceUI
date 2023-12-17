<script setup>
const props = defineProps({ orderListItem: Object });
</script>

<template>
  <router-link :to="'/order/info/' + props.orderListItem.id">
    <div class="product-list-item mb-20">
      <div class="product-thumb" style="max-width: 15%">
        <a href="product-details.html">
          <img :src="props.orderListItem.specImage" alt="product image" />
        </a>
      </div>
      <div class="product-list-content mt-2" style="width: 90%">
        <router-link :to="'/business/' + props.orderListItem.businessId">
          <h4>
            <a href="#">{{ props.orderListItem.businessName }}</a>
          </h4>
        </router-link>
        <router-link :to="'/product/' + props.orderListItem.productId">
          <h3 style="margin-bottom: 15px">
            <a href="#">{{ props.orderListItem.productName }}</a>
          </h3>
        </router-link>
        <div style="color: #a9a9a9">
          <div>
            <span class="old-price">{{ props.orderListItem.specName }}</span>
            <span
              class="old-price"
              style="display: inline-block; font-size: 14px; margin-left: 10px"
              >￥{{ props.orderListItem.price }}</span
            >
            <span
              class="regular-price"
              style="display: inline-block; margin-left: 10px"
              >×{{ props.orderListItem.amount }}
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===0">待付款</span>
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===1">待发货</span>
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===2">待收货</span>
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===3">待评价</span>
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===4">已完成</span>
              <span class="old-price" style="color: #ff7e67" v-if="props.orderListItem.status===5">已取消</span>
            </span>
          </div>
          <div style="float: right; margin: 20px 10px 0">
            <a
              href="#"
              class="sqr-btn-f"
              style="margin-right: 5px"
              v-if="props.orderListItem.status === 0"
              >取消订单</a
            >
            <a
              href="#"
              class="sqr-btn"
              style="margin-right: 5px"
              v-if="props.orderListItem.status === 0"
              >去支付</a
            >
            <a
              href="#"
              class="sqr-btn-f"
              style="margin-right: 5px"
              v-if="props.orderListItem.status === 1"
              >模拟发货</a
            >
            <a
              href="#"
              class="sqr-btn"
              style="margin-right: 5px"
              v-if="props.orderListItem.status === 2"
              >确认收货</a
            >
            <a
              href="#"
              class="sqr-btn-f"
              v-if="props.orderListItem.status === 3"
              >去评价</a
            >
            <a
              href="#"
              class="sqr-btn"
              style="margin-right: 5px"
              v-if="
                props.orderListItem.status === 4 ||
                props.orderListItem.status === 5
              "
              >删除订单</a
            >
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted } from "vue";
import service from "@/utils/request.js";
import { codeToName } from "@/utils/area-function.js";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  getOrderDetail();
});

// 获取订单信息
const orderDetail = ref({});
const addressDetail = ref("");
const getOrderDetail = () => {
  service
    .get("/orderItem/detail?orderItemId=" + route.params.id)
    .then((res) => {
      orderDetail.value = res.data.data;
      addressDetail.value =
        codeToName(
          orderDetail.value.provinceCode,
          orderDetail.value.cityCode,
          orderDetail.value.districtCode
        ) + orderDetail.value.address;
    });
};
</script>

<template>
  <div class="shop-main-wrapper pt-120 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <article class="blog-post blog-details">
        <div class="blog-post-content">
          <div class="row">
            <div class="col-4" style="min-width: 300px;">
              <div class="blog-top">
                <div class="post-date-time">
                  <span>订单编号</span>
                </div>
                <div class="post-blog-meta">
                  <p>{{ orderDetail.orderId }}</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="blog-top">
                <div class="post-date-time">
                  <span>收货信息</span>
                </div>
                <div class="post-blog-meta">
                  <p>
                    <span>{{ orderDetail.consignee }}</span>
                    <span class="mx-2">{{ orderDetail.phone }}</span>
                    <span>{{ addressDetail }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-content blog-details">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="product-list-item mb-40 mt-5">
                <div class="product-thumb my-4 border-0">
                  <div style="width: 40%">
                    <div style="
                        padding: 100%;
                        height: 0;
                        position: relative;
                      ">
                      <img :src="orderDetail.specImage" class="img-thumbnail" style="
                          position: absolute;
                          top: 0;
                          left: 12%;
                          width: 100%;
                          height: 100%;
                        " />
                    </div>
                  </div>
                </div>
                <div class="product-list-content" style="width: 70%">
                  <h4 class="mt-1 mb-4">
                    <router-link :to="'/business/' + orderDetail.businessId">
                      <a href="#">{{ orderDetail.businessName }}</a>
                    </router-link>
                  </h4>
                  <h3 class="mb-2">
                    <router-link :to="'/product/' + orderDetail.productId">
                      <a href="#">{{ orderDetail.productName }}</a>
                    </router-link>
                  </h3>
                  <p class="pt-3 pb-3 fs-6 text-black">￥{{ orderDetail.price - orderDetail.freight }} + {{
                    orderDetail.freight }}</p>
                  <p class="pb-4 pt-0">{{ orderDetail.specName }} × {{ orderDetail.amount }}</p>
                  <div style="display: inline-block">
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 0">待付款</span>
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 1">待发货</span>
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 2">待收货</span>
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 3">待评价</span>
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 4">已完成</span>
                    <span class="old-price" style="color: #ff7e67" v-if="orderDetail.status === 5">已取消</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 order-2 order-lg-1 pl-16 my-3">
              <div class="sidebar-wrapper mt-md-100 mt-sm-48">
                <div class="sidebar-single">
                  <div class="sidebar-title">
                    <h3 class="category">Shipping</h3>
                  </div>
                  <div class="sidebar-body">
                    <ul class="sidebar-category">
                      <li>
                        <a class="categoryTitle ml-1"><span class="mr-5">下单时间:</span>{{ orderDetail.createTime }}</a>
                      </li>
                      <li v-if="orderDetail.status >= 1 && orderDetail.status <= 4">
                        <a class="categoryTitle ml-1"><span class="mr-5">付款时间:</span>{{ orderDetail.payTime }}</a>
                      </li>
                      <li v-if="orderDetail.status >= 2 && orderDetail.status <= 4">
                        <a class="categoryTitle ml-1"><span class="mr-5">发货时间:</span>{{ orderDetail.sendTime }}</a>
                      </li>
                      <li v-if="orderDetail.status >= 3 && orderDetail.status <= 4">
                        <a class="categoryTitle ml-1"><span class="mr-5">收货时间:</span>{{ orderDetail.receiptTime }}</a>
                      </li>
                      <li v-if="orderDetail.status == 4">
                        <a class="categoryTitle ml-1"><span class="mr-5">完成时间:</span>{{ orderDetail.finishTime }}</a>
                      </li>
                      <li v-if="orderDetail.status == 5">
                        <a class="categoryTitle ml-1"><span class="mr-5">取消时间:</span>{{ orderDetail.cancelReason }}</a>
                      </li>
                      <li v-if="orderDetail.status == 5">
                        <a class="categoryTitle ml-1"><span class="mr-5">订单取消原因:</span>{{ orderDetail.cancelReason }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tag-line my-0" style="text-align: right;">
            <h4 class="p-0 mr-2">实付款:</h4>
            <span style="margin-right: 70px">￥{{ orderDetail.price }}</span>
          </div>
          <div class="tag-line my-0" style="text-align: right;">
            <h4 class="p-0 mr-2">备注信息:</h4>
            <span style="margin-right: 70px" v-if="orderDetail.remark == null">{{ orderDetail.remark }}</span>
            <span style="margin-right: 70px" v-else>无</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import service from "@/utils/request.js";

// 组件引入
const props = defineProps({ collectItem: Object });

// 取消收藏
function cancelCollect(productId) {
  service
    .post("/collect/cancel", {
      productId: productId,
    })
    .then((res) => {
      console.log(res.data);
    });
}
</script>

<template>
  <div class="product-list-item mb-20">
    <router-link :to="'/product/' + props.collectItem.productId">
      <div class="product-thumb" style="border: none">
        <div style="width: 40%">
          <div
            style="
              padding: 100%;
              height: 0;
              position: relative;
              cursor: pointer;
            "
          >
            <img
              :src="props.collectItem.productCover"
              class="img-thumbnail"
              style="
                position: absolute;
                top: 0;
                left: 12%;
                width: 100%;
                height: 100%;
              "
            />
          </div>
        </div>
      </div>
    </router-link>
    <div class="product-list-content" style="width: 70%">
      <h4 class="mt-3">
        <router-link :to="'/business/' + props.collectItem.businessId">
          <a href="#">{{ props.collectItem.businessName }}</a>
        </router-link>
      </h4>
      <h3>
        <router-link :to="'/product/' + props.collectItem.productId">
          <a href="#">{{ props.collectItem.productName }}</a>
        </router-link>
      </h3>
      <div class="pricebox">
        <span class="regular-price fs-5">￥{{ props.collectItem.price }}</span>
      </div>
      <p class="py-2">{{ props.collectItem.productProfile }}</p>
      <div
        class="fs-4 text-danger" style="cursor:pointer;"
        @click="cancelCollect(props.collectItem.productId)"
      >
        <i class="bi bi-heart-fill"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

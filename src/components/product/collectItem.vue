<script setup>
import { ref } from "vue";
import service from "@/utils/request.js";

// 组件引入
const props = defineProps({ collectItem: Object });

// 消息提示
const message = ref("");
const isShow = ref(Boolean);
isShow.value = false;

// 取消收藏
function cancelCollect() {
  service
    .delete("/collect/cancel", {
      params: {
        productId: props.collectItem.productId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "取消收藏成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          location.reload(); // 页面刷新
          isShow.value = false;
        }, 1000);
      }
    });
}
</script>

<template>
  <v-alert
    type="info"
    variant="tonal"
    :text="message"
    style="
      width: 18%;
      position: fixed;
      top: 120px;
      left: 80%;
      z-index: 1;
      min-width: 200px;
    "
    :model-value="isShow"
  ></v-alert>
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
        class="fs-4 text-danger"
        style="cursor: pointer"
        @click="cancelCollect()"
      >
        <i class="bi bi-heart-fill"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

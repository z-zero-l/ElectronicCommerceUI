<script setup>
import CollectItem from "@/components/product/collectItem.vue";
import { ref, onMounted } from "vue";
import service from "@/utils/request.js";

onMounted(() => {
  getCollectionList();
  getCategoryList();
});

// 消息提示
const message = ref("");
const isShow = ref(false);

// 获取收藏列表
const collectionList = ref([]);
function getCollectionList(cateId) {
  if (cateId == undefined) {
    service.get("/collect/list").then((res) => {
      collectionList.value = res.data.data;
    });
  } else {
    service.get("/collect/list?categoryId=" + cateId).then((res) => {
      collectionList.value = res.data.data;
    });
  }
}

// 获取分类列表
const categoryList = ref([]);
const getCategoryList = async () => {
  service.get("/collect/category").then((res) => {
    categoryList.value = res.data.data;
  });
};

// 取消收藏
const cancelCollect = async (productId) => {
  service
    .delete("/collect/cancel", {
      params: {
        productId: productId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "取消收藏成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          getCollectionList();
          getCategoryList();
          isShow.value = false;
        }, 1000);
      }
    });
}
</script>

<template>
  <v-alert type="info" variant="tonal" :text="message" style="
      width: 18%;
      position: fixed;
      top: 120px;
      left: 80%;
      z-index: 1;
      min-width: 200px;
    " :model-value="isShow"></v-alert>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <div class="row">
        <div class="col-xl-3 col-lg-4 order-2 order-lg-1 mt-20">
          <div class="sidebar-wrapper mt-md-100 mt-sm-48">
            <div class="sidebar-single">
              <div class="sidebar-title">
                <h3 @click="getCollectionList()" class="category">Category</h3>
              </div>
              <div class="sidebar-body">
                <ul class="sidebar-category">
                  <li v-for="item in categoryList" :key="item.categoryId">
                    <a class="categoryTitle">{{ item.cateName }}</a>
                    <ul class="children">
                      <li class="categoryItem" v-for="i in item.childCate" @click="getCollectionList(i.categoryId)">
                        <a>{{ i.cateName }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 order-1 order-lg-2">
          <div class="shop-product-wrapper" data-target="list">
            <div class="shop-product-wrap row list">
              <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                <div class="product-list-item mb-20" v-for="collectItem in collectionList">
                  <router-link :to="'/product/' + collectItem.productId">
                    <div class="product-thumb" style="border: none">
                      <div style="width: 40%">
                        <div style="
                            padding: 100%;
                            height: 0;
                            position: relative;
                            cursor: pointer;
                          ">
                          <img :src="collectItem.productCover" class="img-thumbnail" style="
                              position: absolute;
                              top: 0;
                              left: 12%;
                              width: 100%;
                              height: 100%;
                            " />
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <div class="product-list-content" style="width: 70%">
                    <h4 class="mt-3">
                      <router-link :to="'/business/' + collectItem.businessId">
                        <span>{{ collectItem.businessName }}</span>
                      </router-link>
                    </h4>
                    <h3>
                      <router-link :to="'/product/' + collectItem.productId">
                        <span>{{ collectItem.productName }}</span>
                      </router-link>
                    </h3>
                    <div class="pricebox">
                      <span class="regular-price fs-5">￥{{ collectItem.price }}</span>
                    </div>
                    <p class="p-0 pt-2 pb-4">
                      {{ collectItem.productProfile }}
                    </p>
                    <div style="cursor: pointer" @click="cancelCollect(collectItem.productId)">
                      <i class="bi bi-heart-fill fs-4 text-danger"></i>
                      <span style="
                          font-size: 12px;
                          margin-left: 20px;
                          color: #a9a9a9;
                        ">已有 {{ collectItem.collectCount }} 人收藏</span>
                    </div>
                  </div>
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
.category:hover {
  cursor: pointer;
  color: #ff7e67;
}

.categoryTitle {
  font-size: 18px;
  margin-top: 10px;
  text-indent: 2em;
}

.categoryItem {
  text-indent: 2em;
}

.categoryItem:hover {
  cursor: pointer;
  color: #ff7e67;
}
</style>
<script setup>
import CollectItem from "@/components/product/collectItem.vue";
import { ref, onMounted } from "vue";
import service from "@/utils/request.js";

onMounted(() => {
  getCollectionList();
  getCategoryList();
});

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
</script>

<template>
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
                <CollectItem v-for="collectItem in collectionList" :collectItem="collectItem"></CollectItem>
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
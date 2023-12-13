<script setup>
import CategoryItem from "@/components/product/categoryItem.vue";
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";

onMounted(() => {
  getCategoryFirstList();
  getCategorySecondListAll();
});

// 获取一级分类列表
const categoryFirstList = ref([]);
const getCategoryFirstList = async () => {
  service.get("/category/list/first").then((res) => {
    categoryFirstList.value = res.data.data;
  });
};

// 获取全部二级分类信息
const categorySecondListAll = ref([]);
const getCategorySecondListAll = async () => {
  service.get("/category/list").then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      for (let j = 0; j < res.data.data[i].childCate.length; j++) {
        categorySecondListAll.value.push(res.data.data[i].childCate[j]);
      }
    }
    categorySecondList.value = categorySecondListAll.value;
  });
};

// 获取二级分类信息
const categorySecondList = ref([]);
function getCategorySecondList(parentId) {
  service.get("/category/list/second/" + parentId).then((res) => {
    categorySecondList.value = res.data.data;
  });
}
</script>
<template>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <div class="d-flex align-items-start">
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" role="tablist">
            <button
              class="nav-link fs-6"
              style="
                width: 70px;
                border-bottom: 1px solid #e3e3e3;
                padding: 10px;
              "
              data-bs-toggle="pill"
              role="tab"
              v-for="categoryFirst in categoryFirstList"
              :key="categoryFirst.categoryId"
              @click="getCategorySecondList(categoryFirst.categoryId)"
            >
              {{ categoryFirst.cateName }}
            </button>
          </div>
          <div class="tab-content ml-5">
            <div class="tab-pane fade show active" role="tabpanel">
              <div v-for="categorySecond in categorySecondList">
                <h6 class="my-2">
                  <span>{{ categorySecond.cateName }}</span>
                  <router-link
                    :to="'/search/category/' + categorySecond.categoryId"
                  >
                    <a
                      href="#"
                      class="forget-pwd float-end"
                      style="font-size: 14px"
                      >全部<i class="bi bi-arrow-right-short"></i
                    ></a>
                  </router-link>
                </h6>
                <div
                  class="row product-carousel-one spt slick-arrow-style"
                  data-row="2"
                  style="border-top: 1px #808080 dashed"
                >
                  <CategoryItem
                    v-for="categoryItem in categorySecond.productList"
                    :categoryItem="categoryItem"
                  ></CategoryItem>
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
.nav .nav-link:hover {
  color: #fff;
  background-color: #ff7e67;
  border-radius: 0;
}

.nav .active {
  background-color: #ff7e67;
  color: #fff;
}


</style>

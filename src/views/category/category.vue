<script setup>
import CategoryItem from "@/components/product/categoryItem.vue";
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";

onMounted(() => {
  getCategoryFirstList();
  // getCategorySecondList(categoryFirstList.value[0].categoryId)
});

// 获取一级分类列表
const categoryFirstList = ref([]);
const getCategoryFirstList = async () => {
  service.get("/category/list/first").then((res) => {
    categoryFirstList.value = res.data.data;
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
              class="nav-link active"
              style="width: 65px"
              data-bs-toggle="pill"
              role="tab"
              v-for="categoryFirst in categoryFirstList"
              :key="categoryFirst.categoryId"
              @click="getCategorySecondList(categoryFirst.categoryId)"
            >
              {{ categoryFirst.cateName }}
            </button>
          </div>
          <div class="tab-content ml-3">
            <div class="tab-pane fade show active" role="tabpanel">
              <div v-for="categorySecond in categorySecondList">
                <h6 class="my-2">
                  <span>{{ categorySecond.cateName }}</span>
                  <router-link to="/search">
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
                    v-for="categoryItem in 4"
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

.nav .active {
  background-color: #ff7e67;
  color: #fff;
}

</style>

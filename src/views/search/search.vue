<script setup>
import BusinessItem from "@/components/search/businessItem.vue";
import ProductItem from "@/components/search/productItem.vue";
import service from "@/utils/request.js";
import { ref } from "vue";

// 搜索内容
const keyword = ref("");

// 商品搜索
const productList = ref([]);
const searchProducts = async () => {
  service.get("/product/search?keyword=" + keyword.value).then((res) => {
    productList.value = res.data.data;
  });
};

// 店铺搜索
const businessList = ref([]);
const searchBusiness = async () => {
  service.get("/business/search?keyword=" + keyword.value).then((res) => {
    businessList.value = res.data.data;
  });
};
</script>

<template>
  <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form style="width: 50%; margin: 10px auto">
            <div class="input-group" style="height: 50px">
              <input
                type="text"
                class="form-control"
                style="height: 100%"
                placeholder="Search"
                aria-label="Search"
                v-model="keyword"
              />
              <div
                class="input-group-append"
                @click="
                  searchBusiness();
                  searchProducts();
                "
              >
                <span class="input-group-text"
                  ><i class="bi bi-search"></i
                ></span>
              </div>
            </div>
          </form>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link"
                id="nav-all-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-all"
                type="button"
                role="tab"
                aria-controls="nav-all"
                aria-selected="false"
              >
                店铺
              </button>
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                商品
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
            >
              <div
                class="tab-pane fade show active"
                id="dashboad"
                role="tabpanel"
              >
                <div class="myaccount-content">
                  <BusinessItem
                    v-for="business in businessList"
                    :business="business"
                    v-if="businessList.length > 0"
                  ></BusinessItem>
                  <div v-else>暂无相关信息~</div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                class="tab-pane fade show active"
                id="dashboad"
                role="tabpanel"
              >
                <div class="myaccount-content">
                  <ProductItem
                    :productList="productList"
                    v-if="productList.length > 0"
                  ></ProductItem>
                  <div v-else>暂无相关信息~</div>
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
.input-group-text:hover {
  background-color: #ff7e67;
  color: white;
  cursor: pointer;
}
.nav-tabs .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}
.nav-tabs .active {
  background-color: #ff7e67;
  color: #fff;
  border: #ff7e67 solid 1px;
}


</style>
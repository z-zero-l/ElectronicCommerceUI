<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute()

onMounted(() => {
  selectProductCategoryList();
});

// 每行展示商品数
const rowItemSize = ref(4);

// 获取商品信息
const productList = ref([])
const selectProductCategoryList = async () => {
  service.get("/product/category/" + route.params.id).then((res) => {
    productList.value = res.data.data;
  })
}
</script>

<template>
  <div class="page-section pt-100 pb-14 pt-sm-60 pb-sm-0">
    <div class="container my-10">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center pb-44">
            <h2>Category Products</h2>
          </div>
        </div>
      </div>
      <div class="row product-carousel-one spt slick-arrow-style"
        v-for="r in (parseInt(productList.length / rowItemSize) + 1)" :key="r">
        <div class="col-lg-3 col-sm-6" v-for="product in productList.slice(4 * (r - 1), 4 * (r - 1) + 4)"
          :key="product.productId">
          <router-link :to="'/product/' + product.productId">
            <div class="product-item mb-20">
              <div class="product-thumb">
                <div class="product-img">
                  <a href="#">
                    <img :src="product.productCover" alt="product image" class="obj-fit w-75 h-75" />
                  </a>
                </div>
                <div class="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view">
                    <span data-toggle="tooltip" data-placement="left" title="Quick view"><i
                        class="ion-ios-eye-outline"></i></span>
                  </a>
                </div>
              </div>
              <div class="product-description text-center">
                <div class="manufacturer">
                  <router-link :to="'/business/' + product.businessId">
                    <p>
                      <a href="#">{{ product.business }}</a>
                    </p>
                  </router-link>
                </div>
                <div class="product-name">
                  <h3>
                    <a href="#">{{ product.productName }}</a>
                  </h3>
                </div>
                <div class="price-box">
                  <span class="regular-price">￥{{ product.price }}</span>
                  <span class="old-price">{{ product.totalSaleAmount }}+人付款</span>
                </div>
              </div>
            </div>
          </router-link>
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

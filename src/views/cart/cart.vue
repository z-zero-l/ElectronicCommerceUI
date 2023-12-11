<script setup>
import { ref, onMounted, computed } from "vue";
import service from "@/utils/request.js";

onMounted(() => {
  getCartList();
});

// 获取购物车列表
const cartList = ref([]);
const getCartList = async () => {
  service.get("/cart/list").then((res) => {
    cartList.value = res.data.data;
  });
};

// 合计
const totalPrice = computed(() => {
  return cartList.value.reduce((total, item) => {
    if (item.selected) {
      return total + item.sellPrice * item.quantity;
    }
    return total;
  }, 0);
});

// 选中/取消选中

// 商品数量加

// 商品数量减

// 修改商品数量

// 移出购物车

// 结算
</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- cart main wrapper start -->
    <div class="cart-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 mt-15">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Cart Table Area -->
            <div class="cart-table table-responsive">
              <table class="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th
                      class="pro-thumbnail"
                      style="background-color: rgb(255, 126, 103)"
                    ></th>
                    <th
                      class="pro-thumbnail"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Thumbnail
                    </th>
                    <th
                      class="pro-title"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Product
                    </th>
                    <th
                      class="pro-price"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Specs
                    </th>
                    <th
                      class="pro-quantity"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Quantity
                    </th>
                    <th
                      class="pro-subtotal"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Price
                    </th>
                    <th
                      class="pro-remove"
                      style="background-color: rgb(255, 126, 103)"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartList" :key="item.cartId">
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border-warning"
                          type="checkbox"
                          id="flexCheckDisabled"
                          :checked="item.selected === 1"
                        />
                      </div>
                    </td>
                    <td class="pro-thumbnail">
                      <router-link :to="'/product/' + item.productId">
                        <span
                          ><img
                            class="img-fluid"
                            :src="item.specImg"
                            alt="Product"
                        /></span>
                      </router-link>
                    </td>
                    <td class="pro-title">
                      <span>{{ item.productName }}</span>
                    </td>
                    <td class="pro-title">
                      <span>{{ item.specName }}</span>
                    </td>

                    <td class="pro-quantity">
                      <button
                        type="button"
                        class="btn btn-light"
                        style="width: 34px"
                      >
                        +
                      </button>
                      <input
                        type="text"
                        class="text-center border border-white"
                        style="width: 34px; height: 34px"
                        :value="item.quantity"
                      />
                      <button
                        type="button"
                        class="btn btn-light"
                        style="width: 34px"
                      >
                        -
                      </button>
                    </td>
                    <td class="pro-subtotal">
                      <span class="d-block fs-6">￥{{ item.sellPrice }}</span>
                      <span class="d-block text-body-tertiary"
                        ><del>￥{{ item.joinPrice }}</del></span
                      >
                    </td>
                    <td class="pro-remove">
                      <span
                        class="sqr-btn text-white"
                        style="padding: 4px 10px; font-size: 12px"
                        >移除</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Cart Update Option -->
            <div
              class="cart-update-option d-block d-md-flex justify-content-between"
            >
              <div class="cart-update ml-auto">
                <span class="sqr-btn-f">合计: ￥{{ totalPrice }}元</span>
                <a href="#" class="sqr-btn">结算</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5 ml-auto"></div>
        </div>
      </div>
    </div>
    <!-- cart main wrapper end -->
  </main>
  <!-- page main wrapper end -->
</template>

<style scoped></style>

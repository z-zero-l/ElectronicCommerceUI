<script setup>
import { ref, onMounted, computed } from "vue";
import service from "@/utils/request.js";

onMounted(() => {
  getCartList();
});

// 消息提示
const message = ref("");
const isShow = ref(false);
const type = ref("success");

// 获取购物车列表
const cartList = ref([]);
const getCartList = async () => {
  service.get("/cart/list").then((res) => {
    cartList.value = res.data.data;
  });
};

// 选中总价计算
const totalPrice = computed(() => {
  return cartList.value.reduce((total, item) => {
    if (item.selected) {
      return total + item.sellPrice * item.quantity;
    }
    return total;
  }, 0);
});

// 选中/取消选中
const selectedCart = async (item) => {
  service
    .put("/cart/update", {
      cartId: item.cartId,
      selected: !item.selected ? 1 : 0,
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "Selected Success!";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          isShow.value = false;
          getCartList();
        }, 1000);
      }
    });
};

// 修改商品数量
const changeQuantity = async (item) => {
  // 小于0，大于1000，自动变1
  if (!(item.quantity > 0 && item.quantity < 1000)) {
    item.quantity = 1;
  } else if (item.quantity > item.stock) {
    // 大于库存，自动变库存
    item.quantity = item.stock;
  }
  service
    .put("/cart/update", {
      cartId: item.cartId,
      quantity: item.quantity,
    })
    .then((res) => {
      if (res.data.code == 200) {
        getCartList();
      }
    });
};

// 商品数量加
function changeQuantityIns(item) {
  item.quantity++;
  changeQuantity(item);
}
// 商品数量减
function changeQuantityDec(item) {
  item.quantity--;
  changeQuantity(item);
}

// 移出购物车
const removeCart = async (cartId) => {
  service
    .delete("/cart/remove", {
      params: {
        cartId: cartId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "Remove Success!";
        type.value = "info";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          isShow.value = false;
          type.value = "success";
          getCartList();
        }, 1000);
      }
    });
};
</script>

<template>
  <v-alert
    :type="type"
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
  <main>
    <div class="cart-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 mt-15">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cart-table table-responsive">
              <table class="table table-bordered mt-3">
                <thead>
                  <tr style="background-color: #ff7e67">
                    <th style="background-color: #ff7e67; width: 110px">
                      Selected
                    </th>
                    <th class="pro-thumbnail" style="background-color: #ff7e67">
                      Thumbnail
                    </th>
                    <th style="background-color: #ff7e67">Product</th>
                    <th style="background-color: #ff7e67">Specs</th>
                    <th class="pro-quantity" style="background-color: #ff7e67">
                      Quantity
                    </th>
                    <th
                      class="pro-subtotal"
                      style="background-color: #ff7e67; max-width: 150px"
                    >
                      Price
                    </th>
                    <th style="background-color: #ff7e67; width: 100px">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="cartList.length==0">
                    <td colspan="7" style="height: 100px;">购物车内暂无商品~</td>
                  </tr>
                  <tr v-for="item in cartList" :key="item.cartId" v-else>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border-warning"
                          type="checkbox"
                          id="flexCheckDisabled"
                          :checked="item.selected === 1"
                          @click="selectedCart(item)"
                        />
                      </div>
                    </td>
                    <td>
                      <router-link :to="'/product/' + item.productId">
                        <span
                          ><img
                            class="img-fluid"
                            :src="item.specImg"
                            alt="Product"
                        /></span>
                      </router-link>
                    </td>
                    <td>
                      <span>{{ item.productName }}</span>
                    </td>
                    <td>
                      <span>{{ item.specName }}</span>
                    </td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-light"
                        style="width: 34px"
                        @click="changeQuantityDec(item)"
                        :disabled="item.quantity <= 1"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        class="text-center border border-white"
                        style="width: 34px; height: 34px"
                        v-model="item.quantity"
                        @change="changeQuantity(item)"
                      />
                      <button
                        type="button"
                        class="btn btn-light"
                        style="width: 34px"
                        @click="changeQuantityIns(item)"
                        :disabled="item.quantity >= item.stock"
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <span class="d-block fs-6">￥{{ item.sellPrice }}</span>
                      <span class="d-block text-body-tertiary"
                        ><del>￥{{ item.joinPrice }}</del></span
                      >
                    </td>
                    <td>
                      <span
                        class="sqr-btn text-white"
                        style="padding: 4px 10px; font-size: 12px"
                        @click="removeCart(item.cartId)"
                        >移除</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="cart-update-option d-block d-md-flex justify-content-between"
            >
              <div class="cart-update ml-auto">
                <span class="sqr-btn-f">合计: ￥{{ totalPrice }}元</span>
                <router-link to="/pay"><a href="#" class="sqr-btn">去结算</a></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5 ml-auto"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
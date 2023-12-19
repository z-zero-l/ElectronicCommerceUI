<script setup>
import service from "@/utils/request.js";
import { ref, onMounted, computed } from "vue";
import { codeToName } from "@/utils/area-function.js";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  getCartList();
  getAddressList();
});

// 消息提示
const message = ref("");
const isShow = ref(false);
const type = ref("success");

// 传参列表
const list = ref([]);

// 获取待支付商品列表
const cartList = ref([]);
const getCartList = async () => {
  service.get("/cart/list?selected=1").then((res) => {
    cartList.value = res.data.data;
    // 传参列表赋值
    for (let i = 0; i < cartList.value.length; i++) {
      let listItem = {
        cartId: Number,
        remark: String,
      };
      listItem.cartId = cartList.value[i].cartId;
      listItem.remark = "";
      list.value[i] = listItem;
    }
  });
};

// 获取地址列表
const addressList = ref([]);
const getAddressList = async () => {
  service.get("/address/list").then((res) => {
    addressList.value = res.data.data;
    if (addressList.value.length > 0) {
      addressId.value = addressList.value[0].id;
    }
  });
};

// 选择地址
const addressId = ref(0);
function addressChange(event) {
  addressId.value = event.target.value;
}

// 选中总价计算
const totalPrice = computed(() => {
  return cartList.value.reduce((total, item) => {
    if (item.selected) {
      return total + item.sellPrice * item.quantity + item.freight;
    }
    return total;
  }, 0);
});

// 下单
const toPay = async () => {
  console.log(addressId.value);
  if (addressId.value == null || addressId.value == "") {
    message.value = "请选择地址";
    type.value = "error";
    isShow.value = true;
    setTimeout(() => {
      isShow.value = false;
      type.value = "success";
    }, 1000);
  } else {
    service
      .post("/order/submit?addressId=" + addressId.value, list.value)
      .then((res) => {
        window.localStorage.setItem("order", res.data.data);
        if (res.data.code == 200) {
          // 延迟1s跳转
          setTimeout(() => {
            router.push({ path: "/paid" });
          }, 1000);
        }
      });
  }
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
  <div class="checkout-page-wrapper pt-120 pb-90 pt-sm-58 pb-sm-54">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="checkoutaccordion" id="checkOutAccordion">
            <div class="card">
              <h3 class="mb-0" style="display: inline-block">
                <span style="color: #000; font-size: 18px; margin: 30px"
                  >地址选择</span
                >
                <select
                  class="form-select my-3"
                  style="
                    height: 49px;
                    display: inline-block;
                    width: 80%;
                    margin-left: 20px;
                    background-color: #f7f7f7;
                    border: 1px solid #cccccc;
                    border-radius: 0;
                  "
                  aria-label="Default select example"
                  @change="addressChange"
                  v-model="addressId"
                >
                  <option selected></option>
                  <option :value="address.id" v-for="address in addressList">
                    {{ address.receiver }}&nbsp;&nbsp;{{
                      address.contact
                    }}&nbsp;&nbsp;
                    {{
                      codeToName(
                        address.provinceCode,
                        address.cityCode,
                        address.districtCode
                      )
                    }}{{ address.address }}
                  </option>
                </select>
                <router-link to="/address"
                  ><a href="#" class="ml-5 fs-6" style="color: #ff7e67"
                    >地址管理<i class="bi bi-arrow-right-short"></i></a
                ></router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 40px" v-for="item in cartList" :key="item.cartId">
        <div class="order-summary-details mt-md-26 mt-sm-26">
          <div class="order-summary-content mb-sm-4">
            <div class="cart-table table-responsive text-center mt-0">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th style="background-color: #ff7e67" class="pro-thumbnail">
                      Thumbnail
                    </th>
                    <th style="background-color: #ff7e67">Products</th>
                    <th style="background-color: #ff7e67">Quantity</th>
                    <th style="background-color: #ff7e67">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img :src="item.specImg" alt="Product" />
                    </td>
                    <td>{{ item.productName }} - {{ item.specName }}</td>
                    <td>× {{ item.quantity }}</td>
                    <td>
                      ￥{{ item.sellPrice * item.quantity }} +
                      {{ item.freight }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
          <div class="myaccount-content" style="margin-top: 15px">
            <div class="single-input-item" style="margin-top: 0px">
              <input
                type="text"
                id="user_name"
                placeholder="备注"
                v-model="list.find((i) => i.cartId == item.cartId).remark"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-md-flex justify-content-between">
        <div class="cart-update ml-auto">
          <span class="sqr-btn-f" style="margin-top: 30px"
            >合计: ￥{{ totalPrice }}元</span
          >
          <span class="sqr-btn" @click="toPay()">下单</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

<script setup>
import { ref, onMounted } from "vue";
import service from "@/utils/request.js";

onMounted(() => {
  getOrderList(0);
});

// 消息提示
const message = ref("");
const isShow = ref(false);

// 获取订单详情
const orderList = ref([]);
const getOrderList = async (status) => {
  if (status == undefined) {
    service.get("/order/list?status=").then((res) => {
      orderList.value = res.data.data;
    });
  } else {
    service.get("/order/list?status=" + status).then((res) => {
      orderList.value = res.data.data;
    });
  }
};

// 控制评论弹窗
const isVisible = ref(false);
function changeVisible() {
  isVisible.value = !isVisible.value;
}
const commentContent = ref("")
const commentId = ref(0)
function goComment(id) {
  changeVisible()
  commentId.value = id
}

// 控制评论弹窗
const isCancel = ref(false);
function changeCancel() {
  isCancel.value = !isCancel.value;
}
const cancelReason = ref("")
const cancelId = ref(0)
function goCancel(id) {
  changeCancel()
  cancelId.value = id
}

// 取消理由
const cancelReasonList = [
  "不想要了",
  "价格有点贵",
  "收货地址拍错",
  "规格/款式拍错",
  "暂时不需要了",
  "其他",
];

// 取消订单
const cancelOrder = async () => {
  service.post("/order/cancel?orderItemId=" + cancelId.value + "&&cancelReason=" + cancelReason.value)
    .then((res) => {
      cancelReason.value = ""
      cancelId.value = 0
      if (res.data.code == 200) {
        message.value = "取消订单成功";
        isShow.value = true
        isCancel.value = false;
        setTimeout(() => {
          isShow.value = false
          getOrderList(0);
        }, 1000);
      }
    })
}

// 支付
const payOrder = async (id) => {
  service.post("/order/pay?orderItemId=" + id).then((res) => {
    if (res.data.code == 200) {
      message.value = "支付成功";
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
        getOrderList(0);
      }, 1000);
    }
  })
}

// 模拟发货
const sendOrder = async (id) => {
  service.post("/orderItem/deliver?orderItemId=" + id).then((res) => {
    if (res.data.code == 200) {
      message.value = "发货成功";
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
        getOrderList(1);
      }, 1000);
    }
  })
}

// 确认收货
const receiptOrder = async (id) => {
  service.post("/orderItem/confirm?orderItemId=" + id).then((res) => {
    if (res.data.code == 200) {
      message.value = "收货成功";
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
        getOrderList(2);
      }, 1000);
    }
  })
}

// 删除订单
const deleteOrder = async (id) => {
  service.delete("/orderItem/delete?orderItemId=" + id).then((res) => {
    if (res.data.code == 200) {
      message.value = "删除成功";
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
        getOrderList();
      }, 1000);
    }
  })
}

// 评价
const commentOrder = async () => {
  changeVisible();
  service.post("/orderItem/addComment", {
    orderItemId: commentId.value,
    commentContent: commentContent.value
  })
    .then((res) => {
      commentContent.value = ""
      commentId.value = 0
      if (res.data.code == 200) {
        message.value = "评论成功";
        isShow.value = true;
        setTimeout(() => {
          isShow.value = false;
          getOrderList();
        }, 1000);
      }
    })
}
</script>

<template>
  <v-alert type="success" variant="tonal" :text="message" style="
      width: 18%;
      position: fixed;
      top: 120px;
      left: 80%;
      z-index: 1;
      min-width: 200px;
    " :model-value="isShow"></v-alert>
  <div class="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container mt-20">
      <nav>
        <div class="nav nav-tabs" role="tablist">
          <button class="nav-link" data-bs-toggle="tab" role="tab" @click="getOrderList()">
            全部
          </button>
          <button class="nav-link active" data-bs-toggle="tab" role="tab" @click="getOrderList(0)">
            待支付
          </button>
          <button class="nav-link" data-bs-toggle="tab" role="tab" @click="getOrderList(1)">
            待发货
          </button>
          <button class="nav-link" data-bs-toggle="tab" role="tab" @click="getOrderList(2)">
            待收货
          </button>
          <button class="nav-link" data-bs-toggle="tab" role="tab" @click="getOrderList(3)">
            待评价
          </button>
        </div>
      </nav>
      <div class="tab-content">
        <div class="tab-pane fade show active" role="tabpanel">
          <div class="myaccount-content">
            <div class="product-list-item mb-20" v-for="orderListItem in orderList">
              <div class="product-thumb" style="max-width: 15%">
                <router-link :to="'/order/info/' + orderListItem.id">
                  <a href="#">
                    <img :src="orderListItem.specImage" alt="product image" />
                  </a>
                </router-link>
              </div>
              <div class="product-list-content mt-2" style="width: 90%">
                <h4>
                  <router-link :to="'/business/' + orderListItem.businessId">
                    <a href="#">{{ orderListItem.businessName }}</a>
                  </router-link>
                </h4>
                <h3 style="margin-bottom: 15px">
                  <router-link :to="'/product/' + orderListItem.productId">
                    <a href="#">{{ orderListItem.productName }}</a>
                  </router-link>
                </h3>
                <div style="color: #a9a9a9">
                  <div>
                    <div style="display: inline-block; width: 90%">
                      <span class="old-price">{{ orderListItem.specName }}</span>
                      <span class="old-price" style="display: inline-block; font-size: 14px; margin-left: 10px">￥{{
                        orderListItem.price }}</span>
                      <span class="regular-price" style="display: inline-block; margin-left: 10px">× {{
                        orderListItem.amount }}
                      </span>
                    </div>
                    <div style="display: inline-block">
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 0">待付款</span>
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 1">待发货</span>
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 2">待收货</span>
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 3">待评价</span>
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 4">已完成</span>
                      <span class="old-price" style="color: #ff7e67" v-if="orderListItem.status === 5">已取消</span>
                    </div>
                  </div>
                  <div style="float: right; margin: 20px 10px 0; z-index: 100">
                    <span class="sqr-btn-f " style="margin-right: 5px;" v-if="orderListItem.status === 0"
                      @click="goCancel(orderListItem.id)">取消订单</span>
                    <a class="sqr-btn text-white" style="margin-right: 5px" v-if="orderListItem.status === 0"
                      @click="payOrder(orderListItem.id)">去支付</a>
                    <span class="sqr-btn-f" style="margin-right: 5px" v-if="orderListItem.status === 1"
                      @click="sendOrder(orderListItem.id)">模拟发货</span>
                    <a class="sqr-btn text-white" style="margin-right: 5px" v-if="orderListItem.status === 2"
                      @click="receiptOrder(orderListItem.id)">确认收货</a>
                    <span class="sqr-btn-f" v-if="orderListItem.status === 3"
                      @click="goComment(orderListItem.id)">去评价</span>
                    <a class="sqr-btn text-white" style="margin-right: 5px" v-if="orderListItem.status === 4 ||
                      orderListItem.status === 5
                      " @click=deleteOrder(orderListItem.id)>删除订单</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <v-dialog v-model="isVisible" persistent width="600">
    <v-card>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-textarea counter label="Comment Content" v-model="commentContent"
                  :rules="[v => v.length >= 10 || 'Min 10 characters']"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" type="submit" variant="text" @click="changeVisible()"> 关闭 </v-btn>
        <v-btn color="red-darken-1" type="submit" variant="text" @click="commentOrder()"> 提交 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="isCancel" persistent width="600">
    <v-card>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-select v-model="cancelReason" label="Cancel Reason" :items="cancelReasonList" variant="outlined"></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" type="submit" variant="text" @click="changeCancel()"> 关闭 </v-btn>
        <v-btn color="red-darken-1" type="submit" variant="text" @click="cancelOrder()"> 提交 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.nav-tabs {
  border: 0;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .active {
  background-color: #ff7e67;
  color: #fff;
  border: #ff7e67 solid 1px;
}

.myaccount-content {
  border: 1px solid #ff7e67;
  margin-top: 1px;
}

.product-list-item:hover {
  border: 1px solid #ff7e67;
}

.sqr-btn-f:hover {
  color: #333c4a;
  cursor: pointer;
}






</style>

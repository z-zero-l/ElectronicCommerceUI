<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  countdown();
});

// 取消理由
const cancelReason = [
  "不想要了",
  "价格有点贵",
  "收货地址拍错",
  "规格/款式拍错",
  "暂时不需要了",
  "其他"
];

//倒计时
const min = ref(0);
const sec = ref(0);
const countdown = () => {
  const now = Date.parse(new Date());
  const end = Date.parse(new Date("2023-12-18 16:40:23"));
  const fifteen = 900000;
  const msec = end + fifteen - now;
  if (msec < 0) return;

  // let day = parseInt(msec / 1000 / 60 / 60 / 24);
  // let hr = parseInt((msec / 1000 / 60 / 60) % 24);
  // day = day;
  // hr = hr > 9 ? hr : "0" + hr;
  min.value = parseInt((msec / 1000 / 60) % 60);
  sec.value = parseInt((msec / 1000) % 60);
  min.value = min.value > 9 ? min.value : "0" + min.value;
  sec.value = sec.value > 9 ? sec.value : "0" + sec.value;
  if (min.value >= 0 && sec.value >= 0) {
    //倒计时结束关闭订单
    if (min.value == 0 && sec.value == 0) {
      return;
    }
    setTimeout(function () {
      countdown();
    }, 1000);
  }
};
</script>
<template>
  <div class="checkout-page-wrapper pt-120 pb-90 pt-sm-58 pb-sm-54">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Checkout Login Coupon Accordion Start -->
          <div class="checkoutaccordion" id="checkOutAccordion">
            <div class="card">
              <h3 class="mb-0" style="display: inline-block">
                <span style="color: #000; font-size: 18px; margin: 30px"
                  >剩余支付时间（超时自动关闭）</span
                >
                <span class="time">{{ min }}分钟 {{ sec }}秒</span>
                <!-- <span style="color: #000">1111111111</span> -->
              </h3>
            </div>
            <div class="card">
              <h3 class="mb-0" style="display: inline-block">
                <span style="color: #000; font-size: 18px; margin: 30px"
                  >地址</span
                >
                <span style="color: #000">1111111111</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 40px">
        <!-- <div class="row">
          <div class="col-lg-12"> -->
        <div class="order-summary-details mt-md-26 mt-sm-26">
          <div class="order-summary-content mb-sm-4">
            <!-- Order Summary Table -->
            <div class="order-summary-table table-responsive text-center mt-0">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="pro-thumbnail">Thumbnail</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img /></td>
                    <td>衣服-白色</td>
                    <td>× 1</td>
                    <td>￥100+10</td>
                    <td>快递要邮政哦</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Order Payment Method -->
          </div>
          <!-- </div> -->
          <!-- Checkout Login Coupon Accordion End -->
          <!-- </div> -->
        </div>
      </div>
      <div
        class="d-block d-md-flex w-30"
        style="display: float; float: left; width: 30%; margin-top: 30px"
      >
        <div class="cart-update">
          <a href="#" class="sqr-btn">取消订单</a>
        </div>
        <select
          class="form-select mx-4"
          style="
            height: 42px;
            display: inline-block;
            width: 60%;
            padding-left: 0px;
            background-color: #f7f7f7;
            border: 1px solid #cccccc;
            border-radius: 0;
            text-indent: 6px;
          "
          aria-label="Default select example"
        >
          <option selected>请先选择取消理由</option>
          <option v-for="item in cancelReason" :value="item">{{ item }}</option>
        </select>
      </div>
      <div
        class="d-block d-md-flex justify-content-between"
        style="display: float; float: right; width: 30%"
      >
        <div class="cart-update ml-auto">
          <span class="sqr-btn-f" style="margin-top: 30px">合计: ￥1000元</span>
          <a href="#" class="sqr-btn">支付</a>
        </div>
      </div>
      <!-- <div class="d-block d-md-flex justify-content-between w-30">
        <div class="cart-update">
          <a href="#" class="sqr-btn" style="margin-top: 30px">取消订单</a>
        </div>
      </div>
      <div class="d-block d-md-flex justify-content-between">
        <div class="cart-update ml-auto">
          <span class="sqr-btn-f" style="margin-top: 30px">合计: ￥1000元</span>
          <a href="#" class="sqr-btn">支付</a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped></style>

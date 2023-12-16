<script setup></script>
<template>
  <div class="checkout-page-wrapper pt-120 pb-90 pt-sm-58 pb-sm-54">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Checkout Login Coupon Accordion Start -->
          <div class="checkoutaccordion" id="checkOutAccordion">
            <div class="card">
              <h3 class="mb-0" style="display: inline-block">
                <span style="color: #000; font-size: 18px; margin: 30px">地址选择</span>
                <select class="form-select my-3" style="
                    height: 49px;
                    display: inline-block;
                    width: 80%;
                    margin-left: 20px;
                    background-color: #f7f7f7;
                    border: 1px solid #cccccc;
                    border-radius: 0;
                  " aria-label="Default select example">
                  <option selected></option>
                  <option value="1">男</option>
                  <option value="2">女</option>
                </select>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 40px" v-for="i in 3">
        <!-- <div class="row">
          <div class="col-lg-12"> -->
        <div class="order-summary-details mt-md-26 mt-sm-26">
          <div class="order-summary-content mb-sm-4">
            <!-- Order Summary Table -->
            <div class="cart-table table-responsive text-center mt-0">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th style="background-color: #ff7e67;">Thumbnail</th>
                    <th style="background-color: #ff7e67;">Products</th>
                    <th style="background-color: #ff7e67;">Quantity</th>
                    <th style="background-color: #ff7e67;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img /></td>
                    <td>衣服-白色</td>
                    <td>× 1</td>
                    <td>￥100+10</td>
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
        <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
          <div class="myaccount-content" style="margin-top: 15px">
            <div class="single-input-item" style="margin-top: 0px;">
              <input type="text" id="user_name" placeholder="备注" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-md-flex justify-content-between ">
        <div class="cart-update ml-auto ">
          <span class="sqr-btn-f " style="margin-top: 30px;">合计: ￥1000元</span>
          <a href="#" class="sqr-btn ">支付</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

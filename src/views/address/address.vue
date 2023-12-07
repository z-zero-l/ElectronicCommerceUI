<script setup>
</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- login register wrapper start -->
    <div class="login-register-wrapper pt-140 pb-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <!-- Login Content Start -->
            <div class="col-lg-7">
              <!-- Single Tab Content Start -->
                <div class="myaccount-content " style="width: 530px;">
                  <h3>地址列表</h3>
                  <div class="myaccount-table table-responsive text-center">
                    <table class="table table-bordered">
                      <thead class="thead-light">
                        <tr>
                          <th>收货人</th>
                          <th>联系方式</th>
                          <th>收货地址</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>张三</td>
                          <td>13323456534</td>
                          <td>江苏省南京市栖霞区</td>
                          <td><a href="cart.html" class="check-btn sqr-btn" style=";padding: 2px ;width: 20px; height: 25px;"><i
                        class="bi bi-arrow-right-short"></i></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <!-- Single Tab Content End -->
            </div>
            <!-- Login Content End -->

            <!-- Register Content Start -->
            <div class="col-lg-5">
              <div class="login-reg-form-wrap mt-md-100 mt-sm-58 " style="">
                <h2 style="margin-top: 20px;">Form</h2>
                <form action="#" method="post">
                  <div class="single-input-item">
                    <input type="text" placeholder="收货人" required />
                  </div>
                  <div class="single-input-item">
                    <input type="email" placeholder="联系方式" required />
                  </div>
                  <div class="single-input-item">
                    <input type="email" placeholder="收货地址" required />
                  </div>
                  <div class="single-input-item">
                    <div class="login-reg-form-meta">
                      <div class="remember-meta">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="subnewsletter">
                          <label class="custom-control-label" for="subnewsletter">默认地址</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="single-input-item">
                    <button class="sqr-btn">SAVE</button>
                  </div>
                </form>
              </div>
            </div>
            <!-- Register Content End -->
          </div>
        </div>
      </div>
    </div>
    <!-- login register wrapper end -->
  </main>
  <!-- page main wrapper end -->
</template>

<style scoped></style>

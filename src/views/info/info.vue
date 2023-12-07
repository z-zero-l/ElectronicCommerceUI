<script setup></script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- my account wrapper start -->
    <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- My Account Tab Content Start -->
            <div class="col-lg-12 col-md-8">
              <div class="tab-content" id="myaccountContent">
                <!-- Single Tab Content Start -->
                <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                  <div class="myaccount-content">
                    <h3>基本信息</h3>
                    <div class="account-details-form">
                      <form action="#">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="user_name" class="required">用户名</label>
                              <input type="text" id="user_name" placeholder="用户名" />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="account" class="required">账号</label>
                              <input type="text" id="account" placeholder="账号" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="phone" class="">手机号</label>
                              <input type="text" id="phone" placeholder="手机号" />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="gender" class="">性别</label>
                              <select class="form-select mt-0" style="height: 49px;background-color: rgb(247,247,247); border: 1px solid rgb(204,204,204); border-radius: 0;" aria-label="Default select example" >
                                <option selected></option>
                                <option value="1">男</option>
                                <option value="2">女</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="single-input-item">
                          <label for="email" class="">邮箱</label>
                          <input type="email" id="email" placeholder="邮箱" />
                        </div>
                        <fieldset>
                          <legend>详细信息</legend>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="single-input-item">
                                <label for="birthday" class="">生日</label>
                                <input type="text" id="birthday" placeholder="生日" />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="single-input-item">
                                <label for="city" class="">地区</label>
                                <input type="text" id="city" placeholder="地区" />
                              </div>
                            </div>
                          </div>
                          <div class="single-input-item">
                            <label for="profile" class="">个人简介</label>
                            <input type="text" id="profile" placeholder="" />
                          </div>
                        </fieldset>
                        <div class="single-input-item">
                          <button class="check-btn sqr-btn">保存</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- Single Tab Content End -->
              </div>
            </div>
            <!-- My Account Tab Content End -->
          </div>
        </div>
      </div>
    </div>

    <!-- my account wrapper end -->
  </main>
  <!-- page main wrapper end -->
</template>

<style scoped></style>

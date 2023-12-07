<script setup>
import service from "@/utils/request.js";
import { ref } from "vue";

const account = ref("")
const password = ref("")
const login = async () => {
  service.post("user/login", {
    account: account.value,
    password: password.value
  }).then((res) => {
    console.log("res:" + res)
    console.log("登录成功")
    window.localStorage.setItem('token')
  });
};

</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- login register wrapper start -->
    <div class="login-register-wrapper pt-100  pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <!-- Login Content Start -->
            <div class="col-lg-6 mx-auto my-5">
              <div class="login-reg-form-wrap pr-lg-50 shadow-lg rounded rounded-3">
                <h2>Sign in <router-link to="/register"><a href="#" class="forget-pwd fs-6 float-end">Register<i
                        class="bi bi-arrow-right-short"></i></a></router-link></h2>
                <form action="#" method="post">
                  <div class="single-input-item">
                    <input v-model="account" placeholder="Enter your Account" required />
                  </div>
                  <div class="single-input-item">
                    <input type="password" v-model="password" placeholder="Enter your Password" required />
                  </div>
                  <div class="single-input-item">
                    <button class="sqr-btn mt-20" @click="login()">Login</button>
                    <router-link to="/forget"><a href="#" class="forget-pwd" style="float: right;">Forget Password?</a></router-link>
                  </div>
                </form>
              </div>
            </div>
            <!-- Login Content End -->
          </div>
        </div>
      </div>
    </div>
    <!-- login register wrapper end -->
  </main>
</template>

<style scoped></style>

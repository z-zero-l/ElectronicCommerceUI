<script setup>
import service from "@/utils/request.js";
import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const account = ref("")
const password = ref("")
const confirmPassword = ref("")

const register = async () => {
  service.post("/user/register", {
    account: account.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }).then((res) => {
    console.log(res.data)
    router.push({ path: 'login' })
  });
};
</script>

<template>
  <main>
    <!-- login register wrapper start -->
    <div class="login-register-wrapper pt-100  pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <!-- Login Content Start -->
            <div class="col-lg-6 mx-auto my-5">
              <div class="login-reg-form-wrap pr-lg-50 shadow-lg rounded rounded-3">
                <h2>Sign up <router-link to="/login"><a href="#" class="forget-pwd fs-6 float-end">Login<i
                        class="bi bi-arrow-right-short"></i></a></router-link>
                </h2>
                <form action="#" method="post">
                  <div class="single-input-item">
                    <input v-model="account" placeholder="Enter your Account" required />
                  </div>
                  <div class="single-input-item">
                    <input v-model="password" type="password" placeholder="Enter your Password" required />
                  </div>
                  <div class="single-input-item">
                    <input v-model="confirmPassword" type="password" placeholder="Sure your Password" required />
                  </div>
                  <div class="single-input-item">
                    <div class="login-reg-form-meta d-flex align-items-center justify-content-between">
                      <div class="remember-meta">
                      </div>
                    </div>
                  </div>
                  <div class="single-input-item">
                    <button class="sqr-btn" @click="register()">Register</button>
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
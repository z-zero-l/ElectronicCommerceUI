<script setup>
import service from "@/utils/request.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// 消息提示
const message = ref("");
const isShow = ref(false);

// 找回密码信息
const account = ref("");
const userName = ref("");
const password = ref("");
const confirmPassword = ref("");

// 忘记密码
const forget = async () => {
  service
    .post("/user/forget", {
      account: account.value,
      password: password.value,
    })
    .then((res) => {
      if (res.data.code == 200) {
        // 设置密码成功
        message.value = "设置密码成功";
        isShow.value = true;
        // 延迟2s跳转登录页
        setTimeout(() => {
          isShow.value = false;
          router.push({ path: "/login" });
        }, 2000);
      }
    });
};</script>

<template>
    <v-alert
    type="success"
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
    <div class="login-register-wrapper pt-70 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <div class="col-lg-6 mx-auto my-5">
              <div
                class="login-reg-form-wrap pr-lg-50 shadow-lg rounded rounded-3 m-0"
              >
                <h2>
                  Forget
                  <router-link to="/login"
                    ><a href="#" class="forget-pwd fs-6 float-end"
                      >Login<i class="bi bi-arrow-right-short"></i></a
                  ></router-link>
                </h2>
                <div class="single-input-item">
                  <input
                    v-model="account"
                    placeholder="Enter your Account"
                    required
                  />
                </div>
                <div class="single-input-item">
                  <input
                    v-model="userName"
                    placeholder="Enter your UserName"
                    required
                  />
                </div>
                <div class="single-input-item">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <div class="single-input-item">
                  <input
                    v-model="confirmPassword"
                    type="password"
                    placeholder="Sure your Password"
                    required
                  />
                </div>
                <div class="single-input-item">
                  <div
                    class="login-reg-form-meta d-flex align-items-center justify-content-between"
                  >
                    <div class="remember-meta"></div>
                  </div>
                </div>
                <div class="single-input-item">
                  <button class="sqr-btn" @click="forget()">Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

<script setup>
import service from "@/utils/request.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// 消息提示
const message = ref("");
const isShow = ref(false);

// 登录信息
const account = ref("");
const password = ref("");
const avatar = ref("");

// 登录
const login = async () => {
  service
    .post("/user/login", {
      account: account.value,
      password: password.value,
    })
    .then((res) => {
      if (res.data.code == 200) {
        // 登录成功
        message.value = "登录成功";
        isShow.value = true;
        // 存入token
        window.localStorage.setItem('token',res.data.data.token);
        avatar.value=res.data.data.avatar
        // 延迟2s跳转主页
        setTimeout(() => {
          isShow.value = false;
          router.push({ path: "/index" });
        }, 2000);
      }
    });
};
</script>

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
    <div class="login-register-wrapper pt-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <div class="col-lg-6 mx-auto my-5">
              <div
                class="login-reg-form-wrap pr-lg-50 shadow-lg rounded rounded-3"
              >
                <h2>
                  Sign in
                  <router-link to="/register"
                    ><a href="#" class="forget-pwd fs-6 float-end"
                      >Register<i class="bi bi-arrow-right-short"></i></a
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
                    type="password"
                    v-model="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <div class="single-input-item">
                  <button class="sqr-btn mt-20" @click="login()">Login</button>
                  <router-link to="/forget"
                    ><a href="#" class="forget-pwd" style="float: right"
                      >Forget Password?</a
                    ></router-link
                  >
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

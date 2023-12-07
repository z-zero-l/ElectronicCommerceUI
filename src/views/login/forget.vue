<script setup>
</script>

<template>
  <main>
    <!-- forget wrapper start -->
    <div class="login-register-wrapper pt-70  pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <!-- forget Start -->
            <div class="col-lg-6 mx-auto my-5">
              <div class="login-reg-form-wrap pr-lg-50 shadow-lg rounded rounded-3 m-0">
                <h2>Forget <router-link to="/login"><a href="#" class="forget-pwd fs-6 float-end">Login<i
                        class="bi bi-arrow-right-short"></i></a></router-link>
                </h2>
                <form action="#" method="post">
                  <div class="single-input-item">
                    <input v-model="account" placeholder="Enter your Account" required />
                  </div>
                  <div class="single-input-item">
                    <input v-model="account" placeholder="Enter your UserName" required />
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
                    <button class="sqr-btn" @click="register()">Change</button>
                  </div>
                </form>
              </div>
            </div>
            <!-- forgetEnd -->
          </div>
        </div>
      </div>
    </div>
    <!-- forget end -->
  </main>
</template>

<style scoped>
</style>
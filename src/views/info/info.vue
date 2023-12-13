<script setup>
import service from "@/utils/request.js";
import { onMounted, ref ,computed} from "vue";
import { format } from "date-fns";
onMounted(() => {
  getProfile();
});

// 获取用户信息
const profile = ref({});
let date = ref()
const getProfile = async () => {
  service.get("/user/profile").then((res) => {
    profile.value = res.data.data;
  });
};

// 更换头像
const file = ref("");
const changeAvatar = async () => {
  service
    .post("/user/profile/avatar", {
      file: file.value,
    })
    .then((res) => {
      console.log(res.data);
    });
};

// 选择文件弹窗控制
const isVisible = ref(Boolean);
isVisible.value = false;
function changeVisible() {
  isVisible.value = !isVisible.value;
}

// 控制生日选择器展示
const isBirthdayPicker = ref(Boolean);
isBirthdayPicker.value = false;
function changeBirthdayPicker() {
  isBirthdayPicker.value = !isBirthdayPicker.value;
}

// 修改用户信息
const changeProfile = async () => {
  service.post("/user/profile",{
    // 
  }).then((res) => {
    console.log(res.data);
  });
};
const formattedDate = computed(() => {
  return date.value ? format(date.value,"yyyy-MM-dd"): '';
});
</script>

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
                <div
                  class="tab-pane fade show active"
                  id="dashboad"
                  role="tabpanel"
                >
                  <div class="myaccount-content">
                    <h3>基本信息</h3>
                    <div class="account-details-form">
                      <form action="#">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="user_name" class="required"
                                >用户名</label
                              >
                              <input
                                type="text"
                                id="user_name"
                                placeholder="用户名"
                                v-model="profile.userName"
                              />
                            </div>
                            <div class="single-input-item">
                              <label for="account" class="required">账号</label>
                              <input
                                type="text"
                                id="account"
                                placeholder="账号"
                                v-model="profile.account"
                              />
                            </div>
                            <div class="single-input-item">
                              <label for="gender">性别</label>
                              <select
                                class="form-select mt-0"
                                style="
                                  height: 49px;
                                  background-color: rgb(247, 247, 247);
                                  border: 1px solid rgb(204, 204, 204);
                                  border-radius: 0;
                                "
                                aria-label="Default select example"
                                v-model="profile.gender"
                              >
                                <option selected></option>
                                <option value="1">男</option>
                                <option value="2">女</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div
                              style="
                                width: 25%;
                                margin-left: 25%;
                                margin-top: 10px;
                              "
                            >
                              <div
                                style="
                                  padding: 100%;
                                  height: 0;
                                  position: relative;
                                  cursor: pointer;
                                "
                                @click="changeVisible()"
                              >
                                <img
                                  :src="profile.avatar"
                                  class="img-thumbnail"
                                  style="
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 50%;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="phone">手机号</label>
                              <input
                                type="text"
                                id="phone"
                                placeholder="手机号"
                                v-model="profile.phone"
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="email" class="">邮箱</label>
                              <input
                                type="email"
                                id="email"
                                placeholder="邮箱"
                                v-model="profile.email"
                              />
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <legend>详细信息</legend>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="single-input-item">
                                <label for="birthday" class="">生日</label>
                                <input v-if="formattedDate!=''"
                                  type="text"
                                  id="birthday"
                                  placeholder="生日"
                                  v-model="formattedDate"
                                  @click="changeBirthdayPicker()"
                                />
                                <input v-else
                                  type="text"
                                  id="birthday"
                                  placeholder="生日"
                                  v-model="profile.birthday"
                                  @click="changeBirthdayPicker()"
                                />
                                <v-date-picker
                                  class="mt-2"
                                  style="
                                    border: 1px solid #ff7e67;
                                    margin: auto;
                                  "
                                  color="#ff7e67"
                                  v-model="date"
                                  v-show="isBirthdayPicker"

                                ></v-date-picker>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="single-input-item">
                                <label for="city" class="">地区</label>
                                <input
                                  type="text"
                                  id="city"
                                  placeholder="地区"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="single-input-item">
                            <label for="profile" class="">个人简介</label>
                            <input
                              type="text"
                              id="profile"
                              placeholder="个人简介"
                              v-model="profile.profile"
                            />
                          </div>
                        </fieldset>
                        <div class="single-input-item">
                          <button class="check-btn sqr-btn" @click="changeProfile()">保存</button>
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
  <div
    class="box-search-content block-bg search_active close__top is-visible"
    v-show="isVisible"
  >
    <form class="minisearch" action="#">
      <div class="field__search">
        <input type="file" style="height: 40px; line-height: 40px" />
        <button
          @click="changeAvatar()"
          style="
            background-color: #fff;
            margin: 5px;
            padding: 8px 10px;
            float: right;
          "
        >
          确认上传
        </button>
      </div>
    </form>
    <div class="close__wrap" @click="changeVisible()">
      <span>close</span>
    </div>
  </div>
</template>

<style scoped></style>

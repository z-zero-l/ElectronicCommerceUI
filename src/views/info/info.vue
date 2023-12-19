<script setup>
import service from "@/utils/request.js";
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { format } from "date-fns";
import { area } from "@/utils/area-data.js";
import { getProvinceByCode } from "@/utils/area-function.js";

onMounted(() => {
  getProfile();
});

// 获取用户信息
const profile = ref({});
let date = ref();
const getProfile = async () => {
  service.get("/user/profile").then((res) => {
    profile.value = res.data.data;
    getProvince(profile.value.provinceCode);
    getCity(profile.value.cityCode);
  });
};

// 消息提示
const message = ref("");
const isShow = ref(false);

// 选择文件弹窗控制
const isVisible = ref(false);
function changeVisible() {
  isVisible.value = !isVisible.value;
}

// 控制生日选择器展示
const isBirthdayPicker = ref(Boolean);
isBirthdayPicker.value = false;
function changeBirthdayPicker() {
  isBirthdayPicker.value = !isBirthdayPicker.value;
}

// 生日格式转换
const formattedDate = computed(() => {
  return date.value ? format(date.value, "yyyy-MM-dd") : profile.value.birthday;
});

// 改变省市区
function provinceChange(event) {
  profile.value.provinceCode = event.target.value;
}
function cityChange(event) {
  profile.value.cityCode = event.target.value;
}
function districtChange(event) {
  profile.value.districtCode = event.target.value;
}

// 获取省份信息
const provinceInfo = ref([]);
function getProvince(code) {
  provinceInfo.value = getProvinceByCode(code);
}

// 获取市信息
const cityInfo = ref([]);
function getCity(code) {
  cityInfo.value = provinceInfo.value.children.find(
    (item) => item.code === code + ""
  );
}

// 更换头像
const changeAvatar = async (file) => {
  let formData = new FormData();
  formData.append("file", file.target.files[0]);
  axios
    .post("http://localhost:8080/user/profile/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: window.localStorage.getItem("token"),
      },
    })
    .then((res) => {
      profile.value.avatar = res.data.data;
      isVisible.value = false;
      location.reload();
    });
};

// 修改用户信息
const changeProfile = async () => {
  service
    .put("/user/profile", {
      userName: profile.value.userName,
      account: profile.value.account,
      gender: profile.value.gender,
      email: profile.value.email,
      phone: profile.value.phone,
      birthday: formattedDate.value,
      profile: profile.value.profile,
      provinceCode:profile.value.provinceCode,
      cityCode:profile.value.cityCode,
      districtCode:profile.value.districtCode,
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "修改信息成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          isShow.value = false;
          getProfile()
        }, 1000);
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
    <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="col-lg-12 col-md-8">
              <div class="tab-content" id="myaccountContent">
                <div
                  class="tab-pane fade show active"
                  id="dashboad"
                  role="tabpanel"
                >
                  <div class="myaccount-content">
                    <h3>基本信息</h3>
                    <div class="account-details-form">
                      <!-- <form> -->
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
                              <option value="0">男</option>
                              <option value="1">女</option>
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
                              <input
                                v-if="formattedDate != ''"
                                type="text"
                                id="birthday"
                                placeholder="生日"
                                v-model="formattedDate"
                                @click="changeBirthdayPicker()"
                              />
                              <input
                                v-else
                                type="text"
                                id="birthday"
                                placeholder="生日"
                                v-model="profile.birthday"
                                @click="changeBirthdayPicker()"
                              />
                              <v-date-picker
                                class="mt-2"
                                style="border: 1px solid #ff7e67; margin: auto"
                                color="#ff7e67"
                                v-model="date"
                                v-show="isBirthdayPicker"
                              ></v-date-picker>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="single-input-item">
                              <label for="city" class="">地区</label>
                              <div class="d-flex justify-content-between">
                                <!-- 省 -->
                                <select
                                  class="form-select mt-0"
                                  style="
                                    height: 49px;
                                    width: 32%;
                                    display: inline-block;
                                    background-color: #f7f7f7;
                                    border: 1px solid #cccccc;
                                    border-radius: 0;
                                  "
                                  v-model="profile.provinceCode"
                                  @change="provinceChange"
                                >
                                  <option
                                    v-for="province in area"
                                    :value="province.code"
                                  >
                                    {{ province.name }}
                                  </option>
                                </select>
                                <!-- 市 -->
                                <select
                                  class="form-select mt-0"
                                  style="
                                    height: 49px;
                                    width: 32%;
                                    display: inline-block;
                                    background-color: #f7f7f7;
                                    border: 1px solid #cccccc;
                                    border-radius: 0;
                                  "
                                  :disabled="profile.provinceCode == 0"
                                  @click="getProvince(profile.provinceCode)"
                                  @change="cityChange"
                                  v-model="profile.cityCode"
                                >
                                  <option
                                    v-for="city in provinceInfo.children"
                                    :value="city.code"
                                  >
                                    {{ city.name }}
                                  </option>
                                </select>
                                <!-- 区县 -->
                                <select
                                  class="form-select mt-0"
                                  style="
                                    height: 49px;
                                    width: 32%;
                                    display: inline-block;
                                    background-color: #f7f7f7;
                                    border: 1px solid #cccccc;
                                    border-radius: 0;
                                  "
                                  :disabled="profile.cityCode == 0"
                                  @click="getCity(profile.cityCode)"
                                  @change="districtChange"
                                  v-model="profile.districtCode"
                                >
                                  <option
                                    v-for="district in cityInfo.children"
                                    :value="district.code"
                                  >
                                    {{ district.name }}
                                  </option>
                                </select>
                              </div>
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
                        <button
                          class="check-btn sqr-btn"
                          @click="changeProfile()"
                        >
                          保存
                        </button>
                      </div>
                      <!-- </form> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Change Avatar -->
  <v-dialog v-model="isVisible" persistent width="600">
    <v-card>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-file-input
                  accept="image/*"
                  label="上传图片"
                  show-size
                  color="success"
                  truncate-length="20"
                  @change="changeAvatar"
                >
                </v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          type="submit"
          variant="text"
          @click="changeVisible()"
        >
          关闭
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>

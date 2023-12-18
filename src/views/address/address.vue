<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
import { area } from "@/utils/area-data.js";
import { getProvinceByCode, codeToName } from "@/utils/area-function.js";

onMounted(() => {
  getAddressList();
});

// 消息提示
const message = ref("");
const isShow = ref(false);
const type = ref("success");

// 获取地址列表
const addressList = ref([]);
const getAddressList = async () => {
  service.get("/address/list").then((res) => {
    addressList.value = res.data.data;
  });
};

// 赋值
const addressForm = ref({});
function changeAddress(item) {
  addressForm.value.id = item.id;
  addressForm.value.receiver = item.receiver;
  addressForm.value.contact = item.contact;
  addressForm.value.provinceCode = item.provinceCode;
  addressForm.value.cityCode = item.cityCode;
  addressForm.value.districtCode = item.districtCode;
  addressForm.value.address = item.address;
  addressForm.value.isDefault = item.isDefault;
  getProvince(addressForm.value.provinceCode);
  getCity(addressForm.value.cityCode);
}

// 改变省市区
function provinceChange(event) {
  addressForm.value.provinceCode = event.target.value;
}
function cityChange(event) {
  addressForm.value.cityCode = event.target.value;
}
function districtChange(event) {
  addressForm.value.districtCode = event.target.value;
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
    (item) => item.code === code.toString()
  );
}

// 新增、修改地址
const submitAddress = async () => {
  if (addressForm.value.id == null) {
    // 新增
    service
      .post("/address/save", {
        receiver: addressForm.value.receiver,
        contact: addressForm.value.contact,
        provinceCode: addressForm.value.provinceCode,
        cityCode: addressForm.value.cityCode,
        districtCode: addressForm.value.districtCode,
        address: addressForm.value.address,
        isDefault: addressForm.value.isDefault ? 1 : 0,
      })
      .then((res) => {
        if (res.data.code == 200) {
          message.value = "新增成功";
          isShow.value = true;
          // 延迟1s
          setTimeout(() => {
            isShow.value = false;
            getAddressList();
          }, 1000);
        }
      });
  } else {
    // 修改
    service
      .put("/address/update", {
        id: addressForm.value.id,
        receiver: addressForm.value.receiver,
        contact: addressForm.value.contact,
        provinceCode: addressForm.value.provinceCode,
        cityCode: addressForm.value.cityCode,
        districtCode: addressForm.value.districtCode,
        address: addressForm.value.address,
        isDefault: addressForm.value.isDefault ? 1 : 0,
      })
      .then((res) => {
        if (res.data.code == 200) {
          message.value = "修改成功";
          isShow.value = true;
          // 延迟1s
          setTimeout(() => {
            isShow.value = false;
            getAddressList();
          }, 1000);
        }
      });
  }
};

// 删除地址信息
const removeAddress = async (addressId) => {
  service
    .delete("/address/remove", {
      params: {
        addressId: addressId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "删除成功";
        type.value = "info";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          isShow.value = false;
          type.value = "success";
          getAddressList();
        }, 1000);
      }
    });
};
</script>

<template>
  <v-alert
    :type="type"
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
    <div class="login-register-wrapper pt-140 pb-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <div class="col-lg-8">
              <div class="myaccount-content" style="width: 98%">
                <h3>地址列表</h3>
                <div class="myaccount-table table-responsive text-center">
                  <table class="table table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th>收货人</th>
                        <th>联系方式</th>
                        <th>收货地址</th>
                        <th>移除</th>
                        <th>修改</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in addressList" :key="item.id">
                        <td>{{ item.receiver }}</td>
                        <td>{{ item.contact }}</td>
                        <td>
                          {{
                            codeToName(
                              item.provinceCode,
                              item.cityCode,
                              item.districtCode
                            )
                          }}{{ item.address }}
                          <i
                            class="bi bi-yelp"
                            style="color: #ff7e67"
                            v-if="item.isDefault == 1"
                          ></i>
                        </td>
                        <td style="width: 50px">
                          <span
                            class="check-btn sqr-btn"
                            style="padding: 2px; width: 20px; height: 25px"
                            @click="removeAddress(item.id)"
                            ><i class="bi bi-x"></i
                          ></span>
                        </td>
                        <td style="width: 50px">
                          <span
                            @click="changeAddress(item)"
                            class="check-btn sqr-btn"
                            style="padding: 2px; width: 20px; height: 25px"
                            ><i class="bi bi-arrow-right-short"></i
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="login-reg-form-wrap mt-md-100 mt-sm-58" style="">
                <h2 style="margin-top: 20px">Form</h2>
                <form>
                  <div class="single-input-item">
                    <input
                      type="text"
                      placeholder="收货人"
                      required
                      v-model="addressForm.receiver"
                    />
                  </div>
                  <div class="single-input-item">
                    <input
                      placeholder="联系方式"
                      required
                      v-model="addressForm.contact"
                    />
                  </div>
                  <div class="single-input-item d-flex justify-content-between">
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
                      v-model="addressForm.provinceCode"
                      @change="provinceChange"
                    >
                      <option v-for="province in area" :value="province.code">
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
                      :disabled="addressForm.provinceCode == 0"
                      @click="getProvince(addressForm.provinceCode)"
                      @change="cityChange"
                      v-model="addressForm.cityCode"
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
                      :disabled="addressForm.cityCode == 0"
                      @click="getCity(addressForm.cityCode)"
                      @change="districtChange"
                      v-model="addressForm.districtCode"
                    >
                      <option
                        v-for="district in cityInfo.children"
                        :value="district.code"
                      >
                        {{ district.name }}
                      </option>
                    </select>
                  </div>
                  <div class="single-input-item">
                    <input
                      placeholder="详细地址"
                      required
                      v-model="addressForm.address"
                    />
                  </div>
                  <div class="single-input-item">
                    <div class="login-reg-form-meta">
                      <div class="remember-meta">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="subnewsletter"
                            :checked="addressForm.isDefault == 1"
                            v-model="addressForm.isDefault"
                          />
                          <label
                            class="custom-control-label"
                            for="subnewsletter"
                            >默认地址</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="single-input-item">
                    <button class="sqr-btn" @click="submitAddress()">
                      SAVE
                    </button>
                    <button
                      type="reset"
                      class="sqr-btn"
                      style="
                        float: right;
                        color: #ff7e67;
                        background-color: #fff;
                      "
                    >
                      CLEAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

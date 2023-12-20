<script setup>
import { area } from "@/utils/area-data.js";
import { getProvinceByCode } from "@/utils/area-function.js";
import { ref } from "vue";

// 省市区编码
const codeList = {
  provinceCode: Number,
  cityCode: Number,
  districtCode: Number,
};

// 改变省市区
function provinceChange(event) {
  codeList.provinceCode = event.target.value;
}
function cityChange(event) {
  codeList.cityCode = event.target.value;
}
function districtChange(event) {
  codeList.districtCode = event.target.value;
}

// 获取省份信息
const provinceInfo = ref([]);
function getProvince() {
  provinceInfo.value = getProvinceByCode(codeList.provinceCode);
}

// 获取市信息
const cityInfo = ref([]);
function getCity(code) {
  cityInfo.value = provinceInfo.value.children.find(
    (item) => item.code === code
  );
}
</script>

<template>
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
    v-model="codeList.provinceCode"
    @change="provinceChange"
  >
    <option v-for="province in area" :value="province.code">
      {{ province.name }}
    </option>
  </select>
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
    :disabled="codeList.provinceCode == 0"
    @click="getProvince()"
    @change="cityChange"
    v-model="codeList.cityCode"
  >
    <option v-for="city in provinceInfo.children" :value="city.code">
      {{ city.name }}
    </option>
  </select>
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
    @click="getCity(codeList.cityCode)"
    :disabled="codeList.cityCode == 0"
    @change="districtChange"
  >
    <option v-for="district in cityInfo.children" :value="district.code">
      {{ district.name }}
    </option>
  </select>
</template>

<style scoped></style>

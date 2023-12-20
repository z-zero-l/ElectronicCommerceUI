<script setup>
import BusinessItem from "@/components/product/businessItem.vue";
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  getBusinessInfo();
});

// 获取店铺信息
const businessInfo = ref({});
const productList = ref([]);
const keyword = ref("");
const getBusinessInfo = async () => {
  service
    .get("/business/" + route.params.id + "?keyword=" + keyword.value)
    .then((res) => {
      businessInfo.value = res.data.data;
      productList.value = res.data.data.productList;
    });
};
</script>

<template>
  <div class="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-9 col-md-8"></div>
          <div class="myaccount-content">
            <div style="display: flex; justify-content: space-between">
              <div style="display: flex ;" >
                <img
                  class="img-thumbnail all"
                  :src="businessInfo.businessAvatar"
                  style="border-radius: 50%; width: 80px; height: 80px;"
                  @click="keyword='';getBusinessInfo();"
                />
                <h3 style="padding: 26px 8px 10px 10px">
                  {{ businessInfo.businessName }}
                </h3>
              </div>
              <div style="">
                <form style="margin-top: 20px">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      v-model="keyword"
                    />
                    <div class="input-group-append" @click="getBusinessInfo()">
                      <span class="input-group-text search-btn"
                        ><i class="bi bi-search"></i
                      ></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <p class="saved-message">
              {{ businessInfo.businessProfile }}
              店铺联系方式：{{ businessInfo.businessPhone }}
            </p>
          </div>
        </div>
      </div>
      <BusinessItem :productList="productList"></BusinessItem>
    </div>
  </div>
</template>

<style scoped>
.search-btn:hover {
  cursor: pointer;
  background-color: #ff7e67;
  color: #fff;
}
.all:hover{
  cursor: pointer;
}

</style>
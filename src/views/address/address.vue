<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";

onMounted(()=>{
  getAddressList()
})

// 获取地址列表
const addressList = ref([])
const getAddressList =async()=>{
  service.get("/address/list").then((res)=>{
    addressList.value = res.data
    console.log(res.data)
  })
}

// 修改赋值
const addressForm=ref({})
function changeAddress(item){
  addressForm.value.id = item.id
  addressForm.value.receiver = item.receiver
  addressForm.value.contact = item.contact
  // addressForm.value.id = item.id
  addressForm.value.address = item.address
  addressForm.value.isDefault = item.isDefault
}
</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- login register wrapper start -->
    <div class="login-register-wrapper pt-140 pb-100 pt-sm-58 pb-sm-58">
      <div class="container">
        <div class="member-area-from-wrap">
          <div class="row">
            <!-- Login Content Start -->
            <div class="col-lg-8">
              <!-- Single Tab Content Start -->
                <div class="myaccount-content " style="width: 98%;">
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
                          <td>{{item.receiver}}</td>
                          <td>{{item.contact}}</td>
                          <td>江苏省南京市栖霞区<i class="bi bi-yelp" style="color: #ff7e67;" v-if="item.isDefault==1"></i></td>
                          <td style="width: 50px;"><span class="check-btn sqr-btn" style=";padding: 2px ;width: 20px; height: 25px;"><i class="bi bi-x"></i></span></td>
                          <td style="width: 50px;"><span  @click="changeAddress(item)" class="check-btn sqr-btn" style=";padding: 2px ;width: 20px; height: 25px;"><i
                        class="bi bi-arrow-right-short"></i></span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <!-- Single Tab Content End -->
            </div>
            <!-- Login Content End -->

            <!-- Register Content Start -->
            <div class="col-lg-4">
              <div class="login-reg-form-wrap mt-md-100 mt-sm-58 " style="">
                <h2 style="margin-top: 20px;">Form</h2>
                <form action="#" method="post">
                  <div class="single-input-item">
                    <input type="text" placeholder="收货人" required v-model="addressForm.receiver"/>
                  </div>
                  <div class="single-input-item">
                    <input placeholder="联系方式" required v-model="addressForm.contact"/>
                  </div>
                  <div class="single-input-item">
                    <input placeholder="收货地址" required />
                  </div>
                  <div class="single-input-item">
                    <input  placeholder="收货地址" required v-model="addressForm.address"/>
                  </div>
                  <div class="single-input-item">
                    <div class="login-reg-form-meta">
                      <div class="remember-meta">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="subnewsletter" :checked="addressForm.isDefault===1">
                          <label class="custom-control-label" for="subnewsletter">默认地址</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="single-input-item">
                    <button class="sqr-btn">SAVE</button>
                    <button type="reset" class="sqr-btn" style="float: right; color: #ff7e67;background-color: #fff;">CLEAR</button>
                  </div>
                </form>
              </div>
            </div>
            <!-- Register Content End -->
          </div>
        </div>
      </div>
    </div>
    <!-- login register wrapper end -->
  </main>
  <!-- page main wrapper end -->
</template>

<style scoped></style>

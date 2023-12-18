<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  getProductInfo();
});

// 消息提示
const message = ref("");
const isShow = ref(false);

// 获取商品信息
const productInfo = ref({});
const getProductInfo = async () => {
  service.get("/product/info/" + route.params.id).then((res) => {
    productInfo.value = res.data.data;
    console.log(res.data.data);
  });
};

// 获取评论列表

// 选中规格
const spec = ref({});
function changeSpec(s) {
  spec.value = s;
}

// 数量加减
const quantity = ref(1);
function increase() {
  quantity.value++;
}
function decrease() {
  quantity.value--;
}
function check() {
  if (!(quantity.value > 0 && quantity < 1000)) {
    quantity.value = 1;
  }
}

// 加入购物车
const addCart = async () => {
  service
    .post("/cart/add", {
      id: spec.value.id,
      count: quantity.value,
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "加入购物车成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          isShow.value = false;
        }, 1000);
      }
    });
};

// 加入收藏
const addCollect = async () => {
  service
    .post("/collect/add?productId=" + productInfo.value.productId)
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "收藏成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          getProductInfo();
          isShow.value = false;
        }, 1000);
      }
    });
};

// 取消收藏
const cancelCollect = async () => {
  service
    .delete("/collect/cancel", {
      params: {
        productId: productInfo.value.productId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "取消收藏成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          getProductInfo();
          isShow.value = false;
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
    <div class="product-details-wrapper pt-100 pb-14 pt-sm-58 mt-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="product-details-inner">
              <div class="row">
                <div class="col-lg-5">
                  <div
                    class="product-large-slider mb-20 slider-arrow-style slider-arrow-style__style-2"
                  >
                    <v-carousel
                      cycle
                      height="400"
                      hide-delimiter-background
                      show-arrows="hover"
                    >
                      <v-carousel-item
                        v-for="item in productInfo.productCarouselImg"
                        :src="item.imgUrl"
                      >
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="product-details-des pt-md-98 pt-sm-58">
                    <router-link :to="'/business/' + productInfo.businessId">
                      <h4>{{ productInfo.businessName }}</h4>
                    </router-link>
                    <h3 class="pt-3">{{ productInfo.productName }}</h3>
                    <p class="p-0">
                      {{ productInfo.productProfile }}
                    </p>
                    <p class="p-0">
                      {{ productInfo.totalSaleAmount }}
                      人已付款&nbsp;&nbsp;&nbsp;&nbsp;{{
                        productInfo.collectCount
                      }}
                      人已付款
                    </p>
                    <div
                      class="quantity-cart-box d-flex align-items-center mb-24 mt-10"
                    >
                      <div class="quantity">
                        <button
                          type="button"
                          class="btn btn-light"
                          style="width: 34px"
                          @click="decrease()"
                          :disabled="quantity <= 1"
                        >
                          -
                        </button>
                        <input
                          type="type"
                          class="text-center border border-white"
                          style="width: 34px; height: 34px"
                          v-model="quantity"
                          @change="check()"
                        />
                        <button
                          type="button"
                          class="btn btn-light"
                          style="width: 34px"
                          @click="increase()"
                        >
                          +
                        </button>
                      </div>
                      <div class="product-btn product-btn__color">
                        <a class="text-white pointer" @click="addCart()"
                          ><i class="ion-bag"></i>Add to cart</a
                        >
                        <a
                          class="ml-4 text-white pointer"
                          v-if="productInfo.isCollect"
                          @click="cancelCollect()"
                          ><i class="bi bi-heart-fill"></i>Remove Collect</a
                        >
                        <a
                          class="ml-4 pointer text-white"
                          v-else
                          @click="addCollect()"
                          ><i class="bi bi-heart"></i>Add to Collect</a
                        >
                      </div>
                    </div>
                    <div class="availability mb-20">
                      <h5>Price:</h5>
                      <span class="text-danger">￥{{ spec.sellPrice }}</span> 
                      <span style="color: #606060;"><del>{{ spec.listPrice }}</del></span>
                    </div>
                    <div class="availability mb-20">
                      <h5>Check:</h5>
                      <span>{{ spec.specName }}</span>
                    </div>
                    <div class="share-icon">
                      <h5>Specis:</h5>
                      <v-sheet
                        class="mx-auto w-75 ml-0"
                        elevation="8"
                        max-width="800"
                      >
                        <v-slide-group class="pa-0" center-active>
                          <v-slide-group-item
                            v-for="spec in productInfo.productSpec"
                            :key="spec.id"
                            v-slot="{ toggle, selectedClass }"
                          >
                            <v-card
                              color="grey-lighten-1"
                              :class="['ma-4', selectedClass]"
                              height="50"
                              width="50"
                              @click="toggle"
                            >
                              <img
                                :src="spec.specImg"
                                @click="changeSpec(spec)"
                              />
                            </v-card>
                          </v-slide-group-item>
                        </v-slide-group>
                      </v-sheet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-details-reviews pt-15 pt-sm-30">
              <div class="row">
                <div class="col-lg-12">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        class="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        详情
                      </button>
                      <button
                        class="nav-link"
                        id="nav-all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-all"
                        type="button"
                        role="tab"
                        aria-controls="nav-all"
                        aria-selected="false"
                      >
                        评价
                      </button>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade"
                      id="nav-all"
                      role="tabpanel"
                      aria-labelledby="nav-all-tab"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="dashboad"
                        role="tabpanel"
                      >
                        <div class="myaccount-content">
                          <div class="comment-section">
                            <h3>{{ productInfo.commentCount }} comment</h3>
                            <ul v-for="i in 3">
                              <li>
                                <div class="author-avatar">
                                  <img
                                    src="@/assets/img/blog/comment-icon.png"
                                    alt=""
                                  />
                                </div>
                                <div class="comment-body">
                                  <span class="reply-btn"
                                    ><a href="#">reply</a></span
                                  >
                                  <h5 class="comment-author">admin</h5>
                                  <div class="comment-post-date">
                                    20 nov, 2018 at 9:30pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Enim maiores adipisci
                                    optio ex, laboriosam facilis non pariatur
                                    itaque illo sunt?
                                  </p>
                                </div>
                              </li>
                              <li class="comment-children">
                                <div class="author-avatar">
                                  <img
                                    src="@/assets/img/blog/comment-icon.png"
                                    alt=""
                                  />
                                </div>
                                <div class="comment-body">
                                  <span class="reply-btn"
                                    ><a href="#">reply</a></span
                                  >
                                  <h5 class="comment-author">admin</h5>
                                  <div class="comment-post-date">
                                    20 nov, 2018 at 9:30pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Enim maiores adipisci
                                    optio ex, laboriosam facilis non pariatur
                                    itaque illo sunt?
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="contact-message pt-0 sm-20">
                            <div class="col-12">
                              <div class="contact2-textarea text-center">
                                <textarea
                                  placeholder="Message *"
                                  name="message"
                                  class="form-control2"
                                  required=""
                                ></textarea>
                              </div>
                              <div class="contact-btn text-center">
                                <button
                                  class="check-btn sqr-btn"
                                  type="submit"
                                  style="color: white"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="dashboad"
                        role="tabpanel"
                      >
                        <div class="myaccount-content">
                          <div
                            class="blog-thumb img-full mt-1"
                            style="width: 95%; margin: 0 auto"
                            v-for="item in productInfo.productDetailImg"
                          >
                            <img :src="item.imgUrl" />
                          </div>
                        </div>
                      </div>
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
</template>

<style scoped>
.elevation-8 {
  box-shadow: none !important;
}

.nav-tabs .nav-link {
  background-color: #fff;
  color: #ff7e67;
  border-radius: 0;
}

.nav-tabs .active {
  background-color: #ff7e67;
  color: #fff;
  border: #ff7e67 solid 1px;
}
.pointer:hover {
  cursor: pointer;
}




</style>

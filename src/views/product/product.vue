<script setup>
import service from "@/utils/request.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  getProductInfo();
  getCommentList();
});

// 消息提示
const message = ref("");
const isShow = ref(false);
const type = ref("success");

// 获取商品信息
const productInfo = ref({});
const getProductInfo = async () => {
  service.get("/product/info/" + route.params.id).then((res) => {
    productInfo.value = res.data.data;
    spec.value = productInfo.value.productSpec[0];
  });
};

// 获取评论列表
const commentList = ref([]);
const getCommentList = async () => {
  service.get("/comment/list?productId=" + route.params.id).then((res) => {
    commentList.value = res.data.data;
  });
};

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
  if (quantity.value < 0 || quantity > 1000) {
    quantity.value = 1;
  }
}

// 加入购物车
const addCart = async () => {
  if (spec.value.id == null) {
    message.value = "请选择商品规格";
    type.value = "error";
    isShow.value = true;
    setTimeout(() => {
      isShow.value = false;
    }, 1000);
  } else if (spec.value.stock < quantity.value) {
    message.value = "库存仅剩" + spec.value.stock + ",请修改购买数量";
    type.value = "error";
    isShow.value = true;
    setTimeout(() => {
      isShow.value = false;
      type.value = "success";
    }, 2000);
  } else {
    service
      .post("/cart/add", {
        id: spec.value.id,
        count: quantity.value,
      })
      .then((res) => {
        if (res.data.code == 200) {
          message.value = "加入购物车成功~";
          isShow.value = true;
          setTimeout(() => {
            isShow.value = false;
            type.value = "success";
          }, 1000);
        }
      });
  }
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
        type.value = "info";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          getProductInfo();
          isShow.value = false;
          type.value = "success";
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
                      interval="3000"
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
                      <h4 class="fs-5">{{ productInfo.businessName }}</h4>
                    </router-link>
                    <h3 class="pt-3">{{ productInfo.productName }}</h3>
                    <p class="p-0">
                      {{ productInfo.productProfile }}
                    </p>
                    <div class="pro-review mt-2">
                      <span
                        ><a 
                          >{{
                            productInfo.totalSaleAmount
                          }}
                          人已付款&nbsp;&nbsp;&nbsp;&nbsp;{{
                            productInfo.collectCount
                          }}
                          人已收藏</a
                        ></span
                      >
                    </div>
                    <div
                      class="quantity-cart-box d-flex align-items-center mb-24 mt-5"
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
                      <span class="text-danger">￥{{ spec.sellPrice }}</span>&nbsp;&nbsp;
                      <span style="color: #606060"
                        ><del>{{ spec.listPrice }}</del></span
                      >
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
                            v-slot="{ selectedClass }"
                          >
                            <v-card
                              color="grey-lighten-1"
                              :class="['ma-4', selectedClass]"
                              height="50"
                              width="50"
                              @click="changeSpec(spec)"
                            >
                              <img :src="spec.specImg" />
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
                            <ul v-for="comment in commentList">
                              <li class="mt-5">
                                <div class="author-avatar">
                                  <img :src="comment.avatar" />
                                </div>
                                <div class="comment-body">
                                  <h5 class="comment-author">
                                    {{ comment.userName }}
                                  </h5>
                                  <div class="comment-post-date">
                                    {{ comment.createTime }}
                                  </div>
                                  <p>
                                    {{ comment.commentContent }}
                                  </p>
                                </div>
                              </li>
                              <li
                                class="comment-children mt-1"
                                v-for="reply in comment.replyList"
                              >
                                <div class="author-avatar">
                                  <img :src="reply.avatar" />
                                </div>
                                <div class="comment-body">
                                  <h5 class="comment-author">
                                    {{ reply.userName }}
                                  </h5>
                                  <div class="comment-post-date">
                                    {{ reply.createTime }}
                                  </div>
                                  <p>
                                    {{ reply.commentContent }}
                                  </p>
                                </div>
                              </li>
                            </ul>
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

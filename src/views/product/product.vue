<script setup>
import { ref } from "vue";
const model = ref("");
const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];

const slides = [
  "https://wg233-own.oss-cn-hangzhou.aliyuncs.com/avatar/5924d882ef5d27db3dfb41bf7be964cb4de7ec9ddc5aed6f2fe821b197938b1e.png",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
];

// 数量
const quantity = ref(1);
function increase() {
  quantity.value++;
  console.log(quantity.value);
}
function decrease() {
  quantity.value--;
  console.log(quantity.value);
}
function check() {
  if (!(quantity.value > 0 && quantity < 1000)) {
    quantity.value = 1;
  }
}

const isCollect = ref(false);

// 取消收藏
function cancelCollect() {
  service
    .delete("/collect/cancel", {
      params: {
        productId: product.productId,
      },
    })
    .then((res) => {
      if (res.data.code == 200) {
        message.value = "取消收藏成功~";
        isShow.value = true;
        // 延迟1s
        setTimeout(() => {
          location.reload(); // 页面刷新
          isShow.value = false;
        }, 1000);
      }
    });
}
</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <div class="product-details-wrapper pt-100 pb-14 pt-sm-58 mt-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- product details inner end -->
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
                      <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                          <div
                            class="d-flex fill-height justify-center align-center"
                          >
                            <div class="text-h2">{{ slide }} Slide</div>
                          </div>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="product-details-des pt-md-98 pt-sm-58">
                    <h3>Chaz Kangeroo Hoodies</h3>
                    <div class="pricebox">
                      <span class="regular-price">$160.00</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.<br />
                      Phasellus id nisi quis justo tempus mollis sed et dui. In
                      hac habitasse platea dictumst. Suspendisse ultrices mauris
                      diam. Nullam sed aliquet elit. Mauris consequat nisi ut
                      mauris efficitur lacinia.
                    </p>
                    <div
                      class="quantity-cart-box d-flex align-items-center mb-24"
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
                        <a href="#"><i class="ion-bag"></i>Add to cart</a>
                        <a
                          href="#"
                          class="ml-4"
                          v-if="isCollect"
                          @click="cancelCollect()"
                          ><i class="bi bi-heart-fill"></i>Remove Collect</a
                        >
                        <a href="#" class="ml-4" v-else
                          ><i class="bi bi-heart"></i>Add to Collect</a
                        >
                      </div>
                    </div>
                    <div class="availability mb-20">
                      <h5>Check:</h5>
                      <span>in stock</span>
                    </div>
                    <div class="share-icon">
                      <h5>Specis:</h5>
                      <v-sheet class="" elevation="8" max-width="800">
                        <v-slide-group v-model="model" class="pa-0" mandatory>
                          <v-slide-group-item
                            v-for="n in 3"
                            :key="n"
                            v-slot="{ isSelected, toggle, selectedClass }"
                          >
                            <v-card
                              color="grey-lighten-1"
                              :class="['ma-4', selectedClass]"
                              height="50"
                              width="50"
                              @click="toggle"
                            >
                              <div
                                class="d-flex fill-height align-center justify-center"
                              >
                                <v-scale-transition>
                                  <v-icon
                                    v-if="isSelected"
                                    color="white"
                                    size="48"
                                  ></v-icon>
                                </v-scale-transition>
                              </div>
                            </v-card>
                          </v-slide-group-item>
                        </v-slide-group>
                      </v-sheet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product details inner end -->
            <!-- product details reviews start -->
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
                      <!-- Single Tab Content Start -->
                      <div
                        class="tab-pane fade show active"
                        id="dashboad"
                        role="tabpanel"
                      >
                        <div class="myaccount-content">
                          <!-- comment area start -->
                          <div class="comment-section">
                            <h3>03 comment</h3>
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
                          <!-- comment area end -->
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
                      <!-- Single Tab Content End -->
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <!-- Single Tab Content Start -->
                      <div
                        class="tab-pane fade show active"
                        id="dashboad"
                        role="tabpanel"
                      >
                        <div class="myaccount-content">
                          <div
                            class="blog-thumb img-full mt-1"
                            style="width: 95%; margin: 0 auto"
                            v-for="i in 5"
                          >
                            <img
                              src="@/assets/img/blog/blog-large-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Single Tab Content End -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product details reviews end -->
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- page main wrapper end -->
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
</style>

<script setup>
const slides = [
  "https://wg233-own.oss-cn-hangzhou.aliyuncs.com/avatar/5924d882ef5d27db3dfb41bf7be964cb4de7ec9ddc5aed6f2fe821b197938b1e.png",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
];
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
                      <template v-slot:prev="{ props }">
                        <v-btn
                          variant="elevated"
                          
                          @click="props.onClick"
                          > <v-icon icon="mdi-chevron-left" /></v-btn
                        >
                      </template>
                      <template v-slot:next="{ props }">
                        <v-btn
                          variant="elevated"
                          color="info"
                          @click="props.onClick"
                          >Next slide</v-btn
                        >
                      </template>
                      <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet height="100%">
                          <div
                            class="d-flex fill-height justify-center align-center"
                          >
                            <img :src="slide" />
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
                        >
                          +
                        </button>
                        <input
                          type="text"
                          class="text-center border border-white"
                          style="width: 34px; height: 34px"
                          value="1"
                        />
                        <button
                          type="button"
                          class="btn btn-light"
                          style="width: 34px"
                        >
                          -
                        </button>
                      </div>
                      <div class="product-btn product-btn__color">
                        <a href="#"><i class="ion-bag"></i>Add to cart</a>
                      </div>
                    </div>
                    <div class="availability mb-20">
                      <h5>Availability:</h5>
                      <span>in stock</span>
                    </div>
                    <div class="share-icon">
                      <h5>share:</h5>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product details inner end -->
            <!-- product details reviews start -->
            <div class="product-details-reviews pt-98 pt-sm-58">
              <div class="row">
                <div class="col-lg-12">
                  <div class="product-review-info">
                    <ul class="nav review-tab">
                      <li>
                        <a class="active" data-toggle="tab" href="#tab_one"
                          >description</a
                        >
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab_two">information</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab_three">reviews</a>
                      </li>
                    </ul>
                    <div class="tab-content reviews-tab">
                      <div class="tab-pane fade show active" id="tab_one">
                        <div class="tab-one">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam fringilla augue nec est tristique auctor.
                            Ipsum metus feugiat sem, quis fermentum turpis eros
                            eget velit. Donec ac tempus ante. Fusce ultricies
                            massa massa. Fusce aliquam, purus eget sagittis
                            vulputate, sapien libero hendrerit est, sed commodo
                            augue nisi non neque.
                          </p>
                          <div class="review-description">
                            <div class="tab-thumb">
                              <img
                                src="@/assets/img/about/services.jpg"
                                alt=""
                              />
                            </div>
                            <div class="tab-des mt-sm-20">
                              <h3>Product Information :</h3>
                              <ul>
                                <li>
                                  Donec non est at libero vulputate rutrum.
                                </li>
                                <li>
                                  Morbi ornare lectus quis justo gravida semper.
                                </li>
                                <li>
                                  Pellentesque aliquet, sem eget laoreet
                                  ultrices
                                </li>
                                <li>Donec a neque libero.</li>
                                <li>
                                  Pellentesque aliquet, sem eget laoreet
                                  ultrices
                                </li>
                                <li>
                                  Morbi ornare lectus quis justo gravida semper.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Cras neque metus, consequat et blandit et, luctus a
                            nunc. Etiam gravida vehicula tellus, in imperdiet
                            ligula euismod eget. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac
                            turpis egestas. Nam erat mi, rutrum at sollicitudin
                            rhoncus, ultricies posuere erat. Duis convallis,
                            arcu nec aliquam consequat, purus felis vehicula
                            felis, a dapibus enim lorem nec augue. Nunc
                            facilisis sagittis ullamcorper.
                          </p>
                          <p>
                            Proin lectus ipsum, gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem nunc. Vestibulum
                            ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia Curae; Aenean eleifend
                            laoreet congue. Vivamus adipiscing nisl ut dolor
                            dignissim semper. Nulla luctus malesuada tincidunt.
                          </p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab_two">
                        <table class="table table-bordered">
                          <tbody>
                            <tr>
                              <td>color</td>
                              <td>black, blue, red</td>
                            </tr>
                            <tr>
                              <td>size</td>
                              <td>L, M, S</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="tab-pane fade" id="tab_three">
                        <form action="#" class="review-form">
                          <h5>
                            1 review for <span>Chaz Kangeroo Hoodies</span>
                          </h5>
                          <div class="total-reviews">
                            <div class="rev-avatar">
                              <img src="@/assets/img/about/avatar.jpg" alt="" />
                            </div>
                            <div class="review-box">
                              <div class="ratings">
                                <span class="good"
                                  ><i class="fa fa-star"></i
                                ></span>
                                <span class="good"
                                  ><i class="fa fa-star"></i
                                ></span>
                                <span class="good"
                                  ><i class="fa fa-star"></i
                                ></span>
                                <span class="good"
                                  ><i class="fa fa-star"></i
                                ></span>
                                <span><i class="fa fa-star"></i></span>
                              </div>
                              <div class="post-author">
                                <p><span>admin -</span> 30 Nov, 2018</p>
                              </div>
                              <p>
                                Aliquam fringilla euismod risus ac bibendum. Sed
                                sit amet sem varius ante feugiat lacinia. Nunc
                                ipsum nulla, vulputate ut venenatis vitae,
                                malesuada ut mi. Quisque iaculis, dui congue
                                placerat pretium, augue erat accumsan lacus
                              </p>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col">
                              <label class="col-form-label"
                                ><span class="text-danger">*</span> Your
                                Name</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col">
                              <label class="col-form-label"
                                ><span class="text-danger">*</span> Your
                                Email</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col">
                              <label class="col-form-label"
                                ><span class="text-danger">*</span> Your
                                Review</label
                              >
                              <textarea
                                class="form-control"
                                required
                              ></textarea>
                              <div class="help-block pt-10">
                                <span class="text-danger">Note:</span> HTML is
                                not translated!
                              </div>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col">
                              <label class="col-form-label"
                                ><span class="text-danger">*</span>
                                Rating</label
                              >
                              &nbsp;&nbsp;&nbsp; Bad&nbsp;
                              <input type="radio" value="1" name="rating" />
                              &nbsp;
                              <input type="radio" value="2" name="rating" />
                              &nbsp;
                              <input type="radio" value="3" name="rating" />
                              &nbsp;
                              <input type="radio" value="4" name="rating" />
                              &nbsp;
                              <input
                                type="radio"
                                value="5"
                                name="rating"
                                checked
                              />
                              &nbsp;Good
                            </div>
                          </div>
                          <div class="buttons">
                            <button class="sqr-btn" type="submit">
                              Continue
                            </button>
                          </div>
                        </form>
                        <!-- end of review-form -->
                      </div>
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

<style scoped></style>

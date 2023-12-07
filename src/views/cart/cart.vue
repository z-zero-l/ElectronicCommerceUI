<script setup>
</script>

<template>
  <!-- page main wrapper start -->
  <main>
    <!-- cart main wrapper start -->
    <div class="cart-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58 mt-15">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Cart Table Area -->
            <div class="cart-table table-responsive">
              <table class="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th class="pro-thumbnail" style="background-color: rgb(255,126,103);"></th>
                    <th class="pro-thumbnail" style="background-color: rgb(255,126,103);">Thumbnail</th>
                    <th class="pro-title" style="background-color: rgb(255,126,103);">Product</th>
                    <th class="pro-price" style="background-color: rgb(255,126,103);">Specs</th>
                    <th class="pro-quantity" style="background-color: rgb(255,126,103);">Quantity</th>
                    <th class="pro-subtotal" style="background-color: rgb(255,126,103);">Price</th>
                    <th class="pro-remove" style="background-color: rgb(255,126,103);">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input border-warning" type="checkbox" value="" id="flexCheckDisabled" >
                      </div>
                    </td>
                    <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="@/assets/img/product/product-1.jpg"
                          alt="Product" /></a></td>
                    <td class="pro-title"><a href="#">商品</a></td>
                    <td class="pro-title"><a href="#">规格</a></td>
                    <td class="pro-quantity">
                        <button type="button" class="btn btn-light " style="width: 34px;">+</button>
                        <input type="text" class="text-center border border-white" style="width: 34px; height: 34px;" value="1"/>
                        <button type="button" class="btn btn-light " style="width: 34px;">-</button>
                    </td>
                    <td class="pro-subtotal"><span>$295.00</span></td>
                    <td class="pro-remove"><a href="#" class="sqr-btn text-white" style="padding: 4px 10px; font-size: 12px;">移除</a></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input border-warning" type="checkbox" value="" id="flexCheckDisabled" >
                      </div>
                    </td>
                    <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="@/assets/img/product/product-2.jpg"
                          alt="Product" /></a></td>
                    <td class="pro-title"><a href="#">Joust Duffle Bags</a></td>
                    <td class="pro-price"><span>$275.00</span></td>
                    <td class="pro-quantity">
                        <button type="button" class="btn btn-light " style="width: 34px;">+</button>
                        <input type="text" class="text-center border border-white" style="width: 34px; height: 34px;" value="1"/>
                        <button type="button" class="btn btn-light " style="width: 34px;">-</button>
                    </td>
                    <td class="pro-subtotal"><span>$550.00</span></td>
                    <td class="pro-remove"><a href="#" class="sqr-btn text-white" style="padding: 4px 10px; font-size: 12px;">移除</a></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input border-warning" type="checkbox" value="" id="flexCheckDisabled" >
                      </div>
                    </td>
                    <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="@/assets/img/product/product-3.jpg"
                          alt="Product" /></a></td>
                    <td class="pro-title"><a href="#">Compete Track Totes</a></td>
                    <td class="pro-price"><span>$295.00</span></td>
                    <td class="pro-quantity">
                        <button type="button" class="btn btn-light " style="width: 34px;">+</button>
                        <input type="text" class="text-center border border-white" style="width: 34px; height: 34px;" value="1"/>
                        <button type="button" class="btn btn-light " style="width: 34px;">-</button>
                    </td>
                    <td class="pro-subtotal"><span>$295.00</span></td>
                    <td class="pro-remove"><a href="#" class="sqr-btn text-white" style="padding: 4px 10px; font-size: 12px;">移除</a></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input border-warning" type="checkbox" value="" id="flexCheckDisabled" >
                      </div>
                    </td>
                    <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="@/assets/img/product/product-4.jpg"
                          alt="Product" /></a></td>
                    <td class="pro-title"><a href="#">Bess Yoga Shorts</a></td>
                    <td class="pro-price"><span>$110.00</span></td>
                    <td class="pro-quantity">
                        <button type="button" class="btn btn-light " style="width: 34px;">+</button>
                        <input type="text" class="text-center border border-white" style="width: 34px; height: 34px;" value="1"/>
                        <button type="button" class="btn btn-light " style="width: 34px;">-</button>
                    </td>
                    <td class="pro-subtotal"><span>$110.00</span></td>
                    <td class="pro-remove"><a href="#" class="sqr-btn text-white" style="padding: 4px 10px; font-size: 12px;">移除</a></td>

                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Cart Update Option -->
            <div class="cart-update-option d-block d-md-flex justify-content-between">
              <div class="cart-update mt-sm-16 ml-auto">
                <span  class="sqr-btn-f">合计: ￥100.00元</span>
                <a href="#" class="sqr-btn">结算</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5 ml-auto">
          </div>
        </div>
      </div>
    </div>
    <!-- cart main wrapper end -->
  </main>
  <!-- page main wrapper end -->
</template>

<style scoped></style>

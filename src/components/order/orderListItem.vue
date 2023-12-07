<script setup>
const props = ({orderListItem:Object})
</script>

<template>
  <!-- product list item start -->
  <div class="product-list-item mb-20">
    <div class="product-thumb" style="max-width: 15%;">
      <a href="product-details.html">
        <img src="@/assets/img/product/product-5.jpg" alt="product image">
      </a>
    </div>
    <div class="product-list-content" style="width: 90%;">
      <h4><a href="#">王家忧郁</a></h4>
      <h3 style="margin-bottom: 15px;"><a href="product-details.html">牛仔裤</a></h3>
      <div>
        <span class="old-price text-black">白色</span>
        <span class="regular-price" style="display: inline-block; margin-left: 10px;">×1</span>
        <span class="old-price" style="display: inline-block;font-size: 14px ; margin-left: 10px;">￥90.00</span>
        <div style="float: right;">
          <a href="#" class="sqr-btn" style="margin-right: 5px;" v-if="props.orderListItem.status===0">取消订单</a>
          <a href="#" class="sqr-btn" style="margin-right: 5px;" v-if="props.orderListItem.status===0">去支付</a>
          <a href="#" class="sqr-btn" style="margin-right: 5px;" v-if="props.orderListItem.status===2">确认收货</a>
          <a href="#" class="sqr-btn" v-if="props.orderListItem.status===3">评价</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list-item:hover{
  border: #ff7e67 1px solid;
}</style>
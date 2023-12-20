<script setup>
import { defineProps } from 'vue'
// 组件传参接收
const props = defineProps({ carouselList: Array })
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="index===0?'active':''"  :aria-current="index===0?'true':'false'" v-for="(item,index) in props.carouselList"></button>
    </div>
    <div class="carousel-inner" v-for="(item,index) in props.carouselList">
      <div class="carousel-item" :class="index===0?'active':''">
        <img :src="item.imgUrl" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped></style>

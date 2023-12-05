<script setup>
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
</script>

<template>
  <Header></Header>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>

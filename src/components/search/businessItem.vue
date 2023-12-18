<script setup>
const props = defineProps({ business: Object });
</script>
<template>
  <div class="myaccount-content">
    <div style="display: flex; justify-content: space-between">
      <div style="display: flex">
        <img
          class="img-thumbnail"
          :src="props.business.businessAvatar"
          style="border-radius: 50%; width: 80px; height: 80px"
        />
        <h3 style="padding: 26px 8px 10px 10px">
          {{ props.business.businessName }}
        </h3>
        <div style="font-size: 12px; margin: auto 10px">
          <span
            class="text-body-tertiary"
            v-if="props.business.businessYears == 0"
            >新店开业</span
          >
          <span
            class="text-body-tertiary"
            v-if="props.business.businessYears >= 3"
            >{{ props.business.businessYears }}年老店</span
          >
        </div>
      </div>
      <div style="margin-top: 25px">
        <router-link :to="'/business/' + props.business.id">
          <a href="#" style="font-size: 14px" class="forget-pwd float-end"
            >进店<i class="bi bi-arrow-right-short"></i
          ></a>
        </router-link>
      </div>
    </div>
    <p class="saved-message">{{ props.business.businessProfile }}</p>
  </div>
</template>
<style scoped></style>

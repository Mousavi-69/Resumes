<script setup lang="ts">
import buttonVue from "./Button.vue";

const text_btn = "نمونه کارهای من";
const id_btn = "#";
</script>
<template>
  <div class="container">
    
    <buttonVue :text="text_btn" :id="id_btn"></buttonVue>
  </div>
</template>
<style scoped lang="scss">
.container {
  color: $primaryColor;
  padding: 30px;
}
</style>

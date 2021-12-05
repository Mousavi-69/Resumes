<script setup lang="ts">
const props = defineProps<{
  icon: string[]; //example : "['fab', 'telegram-plane']"
  title: string; //example :     "'وب اپلیکیشن'"
  text: string; //example :     "'وب اپلیکیشن'"
}>();
</script>
<template>
  <div class="container">
    <div>
      <fa class="icon" :icon="props.icon" />
    </div>
    <h2>{{ props.title }}</h2>
    <p>
      {{ props.text }}
    </p>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 330px;
  height: 250px;
  padding:30px !important;
  background-color: rgb(255, 255, 255) !important;
  border-radius: 5px;
  border: 1px solid #dddcdc;
  box-sizing: border-box;

  .icon {
    font-size: 50px;
    color: $primaryColor;
  }
  h2 {
    line-height: 23px;
    font-weight: 600;
    color: rgb(75, 74, 74);
  }
  p {
    font-size: 1.1rem;
    line-height: 23px;
    font-weight: 600;
    color: gray;
  }
  transition: all 0.3s ease-out 0.2s;

  &:hover {
    box-shadow: 0 1px 15px 5px rgb(216, 216, 216);
  }
}
</style>

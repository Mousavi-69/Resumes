<script setup lang="ts">
const props = defineProps<{
  text: string;
  id: string; //this id for section tag
}>();
</script>
<template>
  <a class="button" href="props.id"> {{ props.text }}</a>
</template>

<style scoped lang="scss">
.button {
  display: inline;
  cursor: pointer;
  padding: 20px;
  background-color: $primaryColor;
  color: white;
  text-decoration: none;
  user-select: none;
  border: 1px solid $primaryColor;
  padding: 13px 40px;
  font-size: 18px;
  line-height: 48px;
  border-radius: 50px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0px 5px 8px 0px rgb(118 78 249 / 55%);
  user-select: none;
  text-transform: uppercase;
  transition:  all 0.3s ease-out 0s;
  &:hover {
    background-color: white;
    color: $primaryColor;
  }
}
</style>

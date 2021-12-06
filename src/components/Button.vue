<script setup lang="ts">
import { computed } from "vue-demi";

const props = defineProps<{
  text: { type: string; default: "Button" };
  id: { type: string; default: "#"; required: false };
  widthBtn: { type: number; default: 180; required: false };
  heightBtn: { type: number; default: 50; required: false };
  textColor: { type: String; default: "#754ef9"; required: false };
  bgColor: { type: String; default: "#754ef9"; required: false }; //  "'blue'"  OR  "'#754ef9'"
  borderColor: { type: String; default: "#754ef9"; required: false }; //  "'blue'"  OR  "'#754ef9'"
  hoverBgColor: { type: String; default: "#754ef9"; required: false }; //  "'blue'"  OR  "'#754ef9'"
  hoverTextColor: { type: String; default: "#754ef9"; required: false }; //  "'blue'"  OR  "'#754ef9'"
}>();
const widthButton = computed(() => {
  let w =
    +props.widthBtn !== 180
      ? `${props.widthBtn}px`
      : `${props.widthBtn.default}px`;
  return w;
});
const heightButton = computed(() => {
  let h =
    +props.widthBtn !== 50
      ? `${props.heightBtn}px`
      : ` ${props.heightBtn.default}px`;
  return h;
});
</script>

<template>
  <a class="button" href="props.id"> {{ props.text }} </a>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 20px;
  text-decoration: none;
  user-select: none;
  border-radius: 50px;
  border-width: 1px;
  border-style: solid;
  padding: 13px 40px;
  line-height: 48px;
  font-size: 19px;
  font-weight: 500;
  box-shadow: 0px 5px 8px 0px rgb(118 78 249 / 55%);
  user-select: none;
  text-transform: uppercase;
  transition: all 0.3s ease-out 0s;
  box-sizing: border-box;
  width: v-bind("widthButton") !important; //:width-btn=
  height: v-bind("heightButton") !important; //
  border-color: v-bind("props.borderColor") !important;
  background-color: v-bind("props.bgColor") !important;
  color: v-bind("props.textColor") !important;
  &:hover {
    background-color: v-bind("props.hoverBgColor") !important;
    color: v-bind("props.hoverTextColor") !important;
  }
}
</style>

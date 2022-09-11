<script setup lang="ts">
import TutorialsComponent from "./ShapeComponent/TutorialsComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();
//Open Tutorial Page
function openTutorial(id: number) {
  router.push({ name: 'tutorial_page', params: { id: 1 } });
}
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>آموزش ها</h2>
    </div>
    <div class="tutorials">
      <!--in openTutorial => 1 is ID for List -->
      <TutorialsComponent
        @click="openTutorial(1)"
        :title="'علوم شناختی'"
        :description="' و ببیبسبییبتوضیحات دوره متنی حد اکثر دو خطی می باشد که در مورد کلیات و هدف دوره است'"
        :price="'150000'"
        :section1="'پشتیبانی'"
        :section2="'دسترسی به مقالات'"
        :section3="'ضمانت بازگشت وجه تا 10 روز'"
        :section4="'هدیه:تم علوم شناختی'"
      ></TutorialsComponent>
      <TutorialsComponent
        :title="'علوم شناختی'"
        :description="'توضیحات دوره'"
        :price="'150000'"
        :section1="'پشتیبانی'"
        :section2="'دسترسی به مقالات'"
        :section3="'ضمانت بازگشت وجه تا 10 روز'"
        :section4="'هدیه:تم علوم شناختی'"
      ></TutorialsComponent>
      <TutorialsComponent
        :title="'علوم شناختی'"
        :description="'توضیحات دوره'"
        :price="'150000'"
        :section1="'پشتیبانی'"
        :section2="'دسترسی به مقالات'"
        :section3="'ضمانت بازگشت وجه تا 10 روز'"
        :section4="'هدیه:تم علوم شناختی'"
      ></TutorialsComponent>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #f7f7f7;
  text-align: center;
  .title {
    padding-top: 75px;
    h2 {
      font-size: 2rem;
    }
  }
}
.tutorials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 5px 100px 50px 100px;
}
</style>

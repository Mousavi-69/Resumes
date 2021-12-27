<template>
  <div>
    <headerVue class="header"></headerVue>
    <IntroductionVue
      id="Introduction"
      class="IntroductionVue"
    ></IntroductionVue>
    <AboutMe id="AboutMe"></AboutMe>
    <MyService id="MyService"></MyService>
    <SectionResume id="SectionResume"></SectionResume>
    <MyPortfolio id="MyPortfolio"></MyPortfolio>
    <Tutorials id="Tutorials"></Tutorials>
    <MyArticles id="MyArticles"></MyArticles>
    <Communication id="Communication"></Communication>
    <Footer></Footer>

    <!-- <fa :icon="['fab', 'telegram-plane']"/> -->
  </div>
</template>
<script setup lang="ts">
import headerVue from "@/components/Header.vue";
import IntroductionVue from "@/components/Introduction.vue";
import AboutMe from "@/components/AboutMe.vue";
import MyService from "@/components/MyService.vue";
import SectionResume from "@/components/SectionResume.vue";
import MyPortfolio from "@/components/MyPortfolio.vue";
import Tutorials from "@/components/Tutorials.vue";
import MyArticles from "@/components/MyArticles.vue";
import Communication from "@/components/Communication.vue";
import Footer from "@/components/Footer.vue";
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 50;
}
.IntroductionVue {
  padding-top: 125px;
}
</style>

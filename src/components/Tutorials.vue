<script setup lang="ts">
import TutorialsComponent from './ShapeComponent/TutorialsComponent.vue';</script>
<template>
  <div class="container">
    <div class="title">
      <h2>آموزش ها</h2>
      <h4>
        من کارهای زیبا را طراحی و کد می کنم و کاری را که می کنم دوست دارم.
      </h4>
    </div>
    <div class="tutorials">
<TutorialsComponent></TutorialsComponent>
<TutorialsComponent></TutorialsComponent>
<TutorialsComponent></TutorialsComponent>

    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #f7f7f7;
  text-align: center;
 .title{
     padding-top: 30px;
 }
}
.tutorials{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    padding: 50px 100px;
}
</style>

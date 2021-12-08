<script setup lang="ts">
import ArticleComponent from "./ShapeComponent/ArticleComponent.vue";
import buttonVue from "./Button.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>مقالات من</h2>
      <h4>
        من کارهای زیبا را طراحی و کد می کنم و کاری را که می کنم دوست دارم.
      </h4>
    </div>
    <div class="article">
      <ArticleComponent></ArticleComponent>
      <ArticleComponent></ArticleComponent>
      <ArticleComponent></ArticleComponent>
    </div>
    <div class="footer">
      <buttonVue
        class="btn"
        :width-btn="185"
        :height-btn="52"
        :text="'مشاهده بیشتر '"
        :id="'#'"
        :bg-color="'#754ef9'"
        :text-color="'white'"
        :hover-bg-color="'white'"
        :hover-text-color="'#754ef9'"
        :border-color="'#754ef9'"
      ></buttonVue>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {

  background-color: white;
  text-align: center;
  box-sizing: border-box;
  .title{
    padding-top: 50px;
    padding-bottom: 30px;
  }
}
.article {
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  padding-bottom: 60px;
}
</style>

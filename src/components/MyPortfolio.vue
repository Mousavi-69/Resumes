<script setup lang="ts">
import PortfolioComponent from "./PortfolioComponent.vue";
import buttonVue from "./Button.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>خدمات من</h2>
      <h4>
        من کارهای زیبا را طراحی و کد می کنم و کاری را که می کنم دوست دارم.
      </h4>
    </div>
    <section class="portfolio">
      <PortfolioComponent></PortfolioComponent>
      <PortfolioComponent></PortfolioComponent>
      <PortfolioComponent></PortfolioComponent
      ><PortfolioComponent></PortfolioComponent>
      <PortfolioComponent></PortfolioComponent>
      <PortfolioComponent></PortfolioComponent>
    </section>
    <footer class="footer">
      <buttonVue
        class="btn"
        :width-btn="185"
        :height-btn="52"
        :text="'مشاهده سایر '"
        :id="'#'"
        :bg-color="'#754ef9'"
        :text-color="'white'"
        :hover-bg-color="'white'"
        :hover-text-color="'#754ef9'"
        :border-color="'#754ef9'"
      ></buttonVue>
    </footer>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #fbfbfb;

  .title {
    padding: 50px 100px 30px 100px;
  }
}
.portfolio {
  padding: 0px 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
</style>

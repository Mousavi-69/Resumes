<script setup lang="ts">
import PortfolioComponent from "./ShapeComponent/PortfolioComponent.vue";
import buttonVue from "./Button.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>نمونه کارهای من</h2>
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
  background-color: #f7f7f7;
  .title {
    padding: 90px 100px 10px 100px;
    text-align: center;
    h2{
      font-size: 2rem;
    }
  }
}
.portfolio {
 display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  padding-bottom: 80px;
}
</style>

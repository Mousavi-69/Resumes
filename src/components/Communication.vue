<script setup lang="ts">
import ServiceComponent from "./ShapeComponent/ServiceComponent.vue";
import Form from "./Form.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>ارتباط با ما</h2>
      <h4>
        من کارهای زیبا را طراحی و کد می کنم و کاری را که می کنم دوست دارم.
      </h4>
    </div>
    <section class="section">
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'وب اپلیکیشن'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'وب اپلیکیشن'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'وب اپلیکیشن'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
    </section>
    <div class="form-map">
      <Form></Form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #f7f7f7;
  padding: 90px 0px 30px 0px;
  text-align: center;
  box-sizing: border-box;
  .title {
    h2 {
      font-size: 2rem;
    }
  }
  .section {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    padding-top: 20px;
  }
}
.form-map {
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 5px;
}
</style>

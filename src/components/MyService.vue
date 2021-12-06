<script setup lang="ts">
import ServiceComponent from "./ServiceComponent.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>خدمات من</h2>
      <h4>
        من کارهای زیبا را طراحی و کد می کنم و کاری را که می کنم دوست دارم.
      </h4>
    </div>
    <div class="service">
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
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #f7f7f7;
  padding:50px 0px 100px 0px ;
;
  text-align: center;
  box-sizing: border-box;
  .service {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-top: 70px;
  }
}
</style>

<script setup lang="ts">
import ServiceComponent from "./ShapeComponent/ServiceComponent.vue";
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>خدمات من</h2>
      <h4>
یک توسعه دهنده Front-End دنیای طراحی و فناوری را با هم پیوند می ­دهد      </h4>
    </div>
    <div class="service">
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'تولید و نگهداری'"
        :text="'طراحی و پیاده‌سازی جنبه‌های بصری سایت. تولید و نگهداری وب سایت ها و رابط های کاربری وب'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'رتبه سایت (SEO)'"
        :text="'استفاده بهترین شیوه های بالا بردن رتبه سایت SEO'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'تست نویسی'"
        :text="'آزمایش عملکرد وب اپلیکیشن '"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'بهبود پرفورمنس'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'رسپانسیو'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
      <ServiceComponent
        :icon="['fab', 'telegram-plane']"
        :title="'آموزش'"
        :text="'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفت'"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #f7f7f7;
  padding: 90px 0px 100px 0px;
  text-align: center;
  box-sizing: border-box;
  .title {
    h2 {
      font-size: 2rem;
    }
  }
  .service {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>

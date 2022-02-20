<script setup lang="ts">
import buttonVue from "./Button.vue";

const text_btn = "نمونه کارهای من";
const id_btn = "#";
</script>
<template>
  <div class="container">
    <div class="content-right">
      <h1 class="title">سلام وقت بخیر</h1>
      <h1>من محمد سنجرموسوی هستم</h1>
      <p>
        من فارغ التحصیل رشته مخابرات در مقطع کارشناسی ارشد از دانشگاه بین المللی
        امام رضا(ع) هستم. من یک توسعه دهنده وب مستقل و علاقه مند به کارم هستم.
        از سال 94 به برنامه نویسی مشغولم و بیش از یک سال هست که به صورت تخصصی به
        عنوان توسعه دهنده فرانت-اند فعالیت میکنم. هزینه مالی و زمانی زیادی را
        صرف آموزش در دوره های تخصصی کرده ام. در این مدت نیز چالش های مختلفی را
        در کار تیمی و فریلنسری تجربه کرده ام.
      </p>
      <buttonVue
        class="btn"
        :text="text_btn"
        :id="id_btn"
        :width-btn="200"
        :height-btn="55"
        :bg-color="'#754ef9'"
        :text-color="'white'"
        :hover-bg-color="'white'"
        :hover-text-color="'754ef9'"
        :border-color="'#754ef9'"
      ></buttonVue>
    </div>
    <div class="content-left">
      <div class="picther">
        <img src="@/assets/images/hero.png" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  color: $primaryColor;
  padding: 10px 100px 30px 150px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  .content-right {
    padding-left: 120px;
    padding-bottom: 50px;
    h1,
    p {
      color: black;
      text-align: justify;
    }
    .title {
      color: $primaryColor;
      font-size: 1.8rem;
      font-weight: 600;
      margin-top: -50px;
    }
    p {
      margin-bottom: 40px;
      font-size: 1.2rem;
      color: rgb(65, 65, 65);
      line-height: 30px;
    }
  }
  .content-left {
    margin-top: -15px;
    .picther {
      position: relative;
      img {
        position: relative;
        z-index: 5;
      }
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 82%;
        border: 20px solid #754ef9;
        border-bottom: 0;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 20px;
        background-color: #754ef9;
        left: 0;
        bottom: 58px;
        z-index: 11;
      }
    }
  }
}
</style>

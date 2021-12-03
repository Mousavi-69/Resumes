<script setup lang="ts">
import Chart from "./Chart.vue";

const widthChart = 110;
const heightChart = 110;
const strokeWidthChart = 7;
const radiusChart = 90;
const valueCountUpDurationChart = 2300;
const customPercentSizeChart = 20;
const customTextSizeChart = 15;
</script>
<template>
  <section class="container">
    <h2>درباره من</h2>
    <h4>من کارهای زیبا را پیاده سازی می کنم و کاری را که می کنم دوست دارم.</h4>
    <div class="section">
      <div class="content-right">
        <h1>برنامه نویس سمت کاربر<span>(Front-End)</span></h1>
        <p>
          نام من برنارد سیدنی است. من یک توسعه دهنده وب هستم ، و بسیار علاقه مند
          به کارهایم هستم. با 20 سال تجربه به عنوان یک توسعه دهنده حرفه ای وب ،
          من مهارت ها و دانش لازم را برای موفقیت پروژه شما کسب کردم..
        </p>
        <ul class="list-contentUs">
          <li>
            <div class="contentUs">
              <div>
                <fa />
              </div>
              <div>
                <p>
                  <span>ایمیل:</span>
                  "m.sanjarmoosavi@gmail.com"
                </p>
              </div>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <section class="content-left">
        <chart
          :percent="73"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#41B883'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>Vue.js'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="65"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#E09B00'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>Javascript'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="62"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#2965f1'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>CSS'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="78"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#F14A29'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>HTML'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="70"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#754ef9'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>REST API'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="60"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#F1502F'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>Git'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="80"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#06b6d4'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>TailwindCss'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
        <chart
          :percent="74"
          :customPercentSize="customPercentSizeChart"
          :visibleValue="true"
          :foregroundColor="'#CD6799'"
          :value-count-up="true"
          :value-count-up-duration="valueCountUpDurationChart"
          :customText="'<br/>SASS'"
          :customTextColor="''"
          :customTextSize="customTextSizeChart"
          :strokeWidth="strokeWidthChart"
          :radius="radiusChart"
          :width="widthChart"
          :height="heightChart"
        />
      </section>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  padding-top: 30px;
  text-align: center;
  .section {
    display: flex;
    padding-top: 20px;
    .content-left {
      width: 50%;
    }
    .content-right {
      width: 50%;
      padding-right: 100px;
      padding-left: 150px;
      h1 {
        text-align: start;
        span {
          font-size: 1.3rem;
          padding-right: 5px;
        }
      }
      p {
        text-align: start;
        font-size: 1.3rem;
        color: rgb(90, 90, 90);
        line-height: 25px;
      }
    }
  }
}
.content-left {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 10px;
  padding-left: 60px;
  padding-top: 30px;
}
</style>

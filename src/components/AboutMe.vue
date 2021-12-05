<script setup lang="ts">
import Chart from "./Chart.vue";

const widthChart = 90;
const heightChart = 90;
const strokeWidthChart = 5;
const radiusChart = 95;
const valueCountUpDurationChart = 2300;
const customPercentSizeChart = 14;
const customTextSizeChart = 13;
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
          من مهارت ها و دانش لازم را برای موفقیت پروژه شما کسب کردم.
        </p>
        <ul class="list-contentUs">
          <li class="list">
            <div class="contentUs">
              <div class="icon-parent">
                <fa class="icon" :icon="['far', 'calendar-alt']" />
              </div>
              <div class="text">
                <p>
                  <span>تاریخ تولد:</span>
                  8 مرداد 1369
                </p>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="contentUs">
              <div class="icon-parent">
                <fa class="icon" :icon="['far', 'envelope']" />
              </div>
              <div class="text">
                <p>
                  <span>ایمیل:</span>
                  m.sanjarmoosavi@gmail.com
                </p>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="contentUs">
              <div class="icon-parent">
                <fa class="icon" :icon="['fas', 'phone']" />
              </div>
              <div class="text">
                <p>
                  <span>تلفن:</span>
                  09150465506
                </p>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="contentUs">
              <div class="icon-parent">
                <fa class="icon" :icon="['fas', 'map-marker-alt']" />
              </div>
              <div class="text">
                <p>
                  <span>آدرس:</span>
                  مشهد - خیابان سیدرضی
                </p>
              </div>
            </div>
          </li>
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
  padding-top: 50px;
  padding-bottom:100px;
  text-align: center;
  .section {
    display: flex;
    padding-top: 50px;
    .content-left {
      width: 50%;
    }
  }
}
.content-right {
  width: 50%;
  padding-right: 100px;
  padding-left: 50px;
  h1 {
    text-align: start;
    span {
      font-size: 1.3rem;
      padding-right: 5px;
    }
  }
  p {
    text-align: start;
    padding-left: 50px;

    font-size: 1.3rem;
    color: rgb(90, 90, 90);
    line-height: 25px;
  }
  .list-contentUs {
    list-style-type: none;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    .list {
      min-width: 220px;
    }
    .contentUs {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      .icon-parent {
        display: flex;
        justify-content: center;
        .icon {
          color: $primaryColor;
        }
      }
      .text {
        padding-right: 10px;
        color: red;
        p {
          font-size: 1rem;
          font-weight: 600;
          color: rgb(90, 90, 90);
          padding-right: 10px;
          span{
            padding-left: 10px;
          }
        }
      }
    }
  }
}
.content-left {
  display: grid;
  grid-template-columns: repeat(4, 110px);
  justify-content: center;
  gap: 10px;
  padding-left: 60px;
  padding-top: 40px;
}
</style>

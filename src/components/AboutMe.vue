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
    <h2>مهارت ها</h2>
    <h4>
      " من برنامه نویسی <span> Front-End </span> را تحت فریم ورک قدرتمند
      <span>Vue.js</span> انجام میدهم "
    </h4>
    <div class="section">
      <div class="content-right">
        <h1>برنامه نویس سمت کاربر<span>(Front-End)</span></h1>
        <p>
          نام من برنارد سیدنی است. من یک توسعه دهنده وب هستم ، و بسیار علاقه مند
          به کارهایم هستم. با 20 سال تجربه به عنوان یک توسعه دهنده حرفه ای وب ،
          من مهارت ها و دانش لازم را برای موفقیت پروژه شما کسب کردم.
        </p>
        <ul class="list-contentUs">
          <li class="list adress">
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
          <li class="list email">
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
                <fa class="icon git" :icon="['fab', 'github']" />
              </div>
              <div class="text">
                <p>
                  <span>گیت هاب:</span>
                  <a
                    class="link"
                    href="https://github.com/Mousavi-69"
                    title="ریپازیتوری گیت هاب "
                    >Mousavi-69</a
                  >
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
  padding-top: 90px;
  padding-bottom: 100px;
  text-align: center;
  h2 {
    font-size: 2rem;
  }
  .section {
    display: flex;
    padding-top: 50px;
    .content-left {
      width: 50%;
    }
  }
}
.content-right {
  width: 68%;
  padding-right: 100px;
  padding-left: 2px;
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
      min-width: 250px;
    }
    .adress,
    .email {
      min-width: 350px;
    }
    .contentUs {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      .icon-parent {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          color: $primaryColor;
          font-size: 1.1rem;
        }
        .git {
          font-size: 1.4rem !important;
        }
      }
      .text {
        padding-right: 5px;
        color: red;
        p {
          font-size: 1rem;
          font-weight: 600;
          color: rgb(90, 90, 90);
          padding-right: 10px;
          span {
            padding-left: 5px;
          }
        }

        .link {
          text-decoration: none;
          color: rgb(90, 90, 90);
          &:hover {
            color: $primaryColor;
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
  align-items: center;
  gap: 10px;
  padding-left: 80px;
  padding-top: 70px;
}
</style>

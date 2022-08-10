<script setup lang="ts"></script>
<template>
  <nav class="header">
    <!-- <fa class="menue" :icon="['fas', 'bars']" /> -->
    <ul class="list">
      <li><a href="#Introduction">درباره من</a></li>
      <li><a href="#AboutMe">مهارت ها</a></li>
      <li><a href="#MyService">خدمات</a></li>
      <li><a href="#MyPortfolio"> افتخارات</a></li>
      <li><a href="#Tutorials">آموزش ها</a></li>
      <li><a href="#MyArticles">مقالات </a></li>
      <li><a href="#Communication">تماس</a></li>
    </ul>

    <div class="icon-parent">
      <fa class="icon" :icon="['fas', 'cart-plus']" />
      <div class="counter">0</div>
    </div>

    <img src="@/assets/images/logo.png" />
  </nav>
</template>
<style scoped lang="scss">
.header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  box-shadow: 0px 5px 100px 10px rgb(134 134 134 / 25%);
  img {
    width: 150px;
    height: 145%;
    cursor: pointer;
    margin-top: -10px;
  }
  .icon-parent {
    margin-right: auto;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      color: $primaryColor;
      font-size: 1.5rem;
    }
    .counter {
      display: flex;
      position: relative;
      left: 43px;
      width: 15px;
      height: 15px;
      background-color: red;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      padding: 9px;
      font-size: 0.9rem;
      font-weight: bold;
      color: white;
    }
  }
  .list {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    gap: 25px;

    li {
      position: relative;
      transition: all 0.3s ease-out 0s;

      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.2rem;
        font-family: fontFamily;
        color: black;

        &:before {
          position: absolute;
          content: "";
          width: 3px;
          height: 0px;
          background-color: #754ef9;
          left: 50%;
          top: -50px;
          transform: translatex(-50%);
          transition: all 0.3s ease-out 0s;
        }
        &:hover {
          color: $primaryColor;
          &:before {
            height: 45px;
          }
        }
        &:focus {
          color: $primaryColor;
          &:before {
            height: 45px;
          }
        }
      }
    }
  }
  .menue {
    width: 30px;
    height: 30px;
    text-align: center;
  }
}
</style>

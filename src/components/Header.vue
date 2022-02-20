<script setup lang="ts"></script>
<template>
  <nav class="header">
    <!-- <fa class="menue" :icon="['fas', 'bars']" /> -->
    <ul class="list">
      <li><a href="#Introduction">درباره من</a></li>
      <li><a href="#AboutMe">مهارت ها</a></li>
      <li><a href="#MyService">خدمات</a></li>
      <li><a href="#MyPortfolio">نمونه کار</a></li>
      <li><a href="#Tutorials">آموزش ها</a></li>
      <li><a href="#MyArticles">مقالات </a></li>
      <li><a href="#Communication">تماس</a></li>
    </ul>
    <img src="@/assets/images/logo.png" />
  </nav>
</template>
<style scoped lang="scss">
.header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  box-shadow: 0px 0px 29px 0px rgb(134 134 134 / 25%);
  img {
    width: 150px;
    height: 145%;
    cursor: pointer;
    margin-top: -10px;
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

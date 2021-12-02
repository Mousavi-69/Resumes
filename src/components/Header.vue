<script setup lang="ts"></script>
<template>
  <nav class="header">
    <!-- <fa class="menue" :icon="['fas', 'bars']" /> -->
    <ul class="list">
      <li><a href="">خانه</a></li>
      <li><a href="">درباره من</a></li>
      <li><a href="">خدمات</a></li>
      <li><a href="">نمونه کار</a></li>
      <li><a href="">پکیج ها</a></li>
      <li><a href="">بلاگ</a></li>
      <li><a href="">ارتباط با من</a></li>
    </ul>
    <img src="@/assets/images/logo.png" />
  </nav>
</template>
<style scoped lang="scss">
.header {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  img {
    width: 150px;
    height: 145%;
    cursor: pointer;
    margin-top: -10px;
    margin-left: 200px;
  }
  .list {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    gap: 25px;
    li {
      position: relative;

      cursor: pointer;
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

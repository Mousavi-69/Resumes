<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="img">
      <img src="@/assets/images/Articles/b-1.jpg" alt="Ecma Script Article" />
      <div class="title">
        <h2>اکما اسکریپت چیشت !؟</h2>
        <h4>1400.9.17</h4>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 350px;
  height: 370px;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgb(152 152 152 / 25%);
  overflow: hidden;
  cursor: pointer;

  .img {
    width: 100%;
    vertical-align: middle;

    &:hover {
      img {
        transform: scale(1.2);
        transition: all 0.3s ease-out 0.15s;
      }
      .title {
        background-color: #754ef9;
        color: white;
        transition: all 0.3s ease-out 0.15s;
      }
    }
  }
  .title {
    position: absolute;
    text-align: right;
    padding: 2px 10px;
    line-height: 10px;
    bottom: 0;
    right: 0;
    width: 70%;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>

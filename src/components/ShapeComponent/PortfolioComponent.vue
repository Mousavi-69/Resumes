<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="work-imge">
      <img
        class="img"
        width="360"
        height="360"
        src="@/assets/images/w-1.jpg"
        alt="portfolio"
      />
    </div>
    <div class="work-overlay">
      <div class="work-content">
        <h3 class="work-title">تصویر</h3>
        <hr />
        <ul>
          <li class="li-1">
            <a class="" href="">
              <fa class="icon" :icon="['fab', 'github']"
            /></a>
          </li>
          <li class="li-2">
            <a class="" href=""> <fa class="icon" :icon="['fas', 'info']" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
}

.work-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0px;
  left: 0px;
  background-color: rgba(117, 78, 249, 0.7);
  visibility: hidden;
  transition: all 0.3s ease-out 0s;

  .work-content {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;

    ul {
      display: flex;
      justify-content: center;
      list-style-type: none;
      .li-1 {
        width: 55px;
        height: 55px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 10px;
        margin: 10px;
        transform: translateX(-100%);
      }
      .li-2 {
        width: 55px;
        height: 55px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 10px;
        margin: 10px;
        transform: translateX(100%);
      }
      .work-title {
        color: white;
        font-size: 1.3rem;
        transform: translateY(-100%);
      }
      hr {
        width: 70px;
        height: 3px;
        background-color: white;
        margin-top: -15px;
      }

      .icon {
        color: white;
        font-size: 35px;
      }
    }
  }
  &:hover {
    visibility: visible;
  }
}
</style>

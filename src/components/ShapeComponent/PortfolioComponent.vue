<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="work-overlay">
      <div class="work-content">
        <div class="content">
          <h3 class="work-title">تصویر</h3>
          <hr />
          <ul>
            <li class="li-1">
              <a class="" href="">
                <fa class="icon" :icon="['fab', 'github']"
              /></a>
            </li>
            <li class="li-2">
              <a class="" href="">
                <fa class="icon" :icon="['fas', 'info']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
}

.work-overlay {
  position: relative;
  display: flex;
  width: 360px;
  height: 360px;
  background-image: url("@/assets/images/w-1.jpg");
  background-repeat: no-repeat;

  &:hover {
    .work-content {
      visibility: visible;
      .content {
        visibility: visible;
      }
      .work-title {
        transform: translateY(35px);
      }
      .li-1 {
        transform: translateX(25px);
      }
      .li-2 {
        transform: translateX(-25px);
      }
    }
  }
  .work-content {
    position: relative;
    visibility: hidden;
    width: 100%;
    text-align: center;
    background-color: rgba(117, 78, 249, 0.8);
    transition: all 0.2s ease-in 0.01s;
  }
}
.content {
  position: relative;
  visibility: hidden;

  top: 20%;
  .work-title {
    position: relative;
    color: white;
    font-size: 1.3rem;
    transition: all 0.2s ease-in 0s;
  }
  hr {
    width: 100px;
    height: 3px;
    background-color: white;
    margin-top: 50px;
  }

  ul {
    display: flex;
    position: absolute;
    left: 30%;
    justify-content: center;
    list-style-type: none;

    .li-1 {
      width: 50px;
      height: 50px;
      border: 1px solid white;
      border-radius: 50%;
      padding: 5px;
      margin: 10px 10px 10px -15px;
      transition: all 0.2s ease-in 0s;
      cursor: pointer;
      a {
        display: inline-block;
      }
    }
    .li-2 {
      width: 50px;
      height: 50px;
      border: 1px solid white;
      border-radius: 50%;
      padding: 5px;
      margin: 10px -15px 10px 30px;
      transition: all 0.2s ease-in 0s;
      cursor: pointer;
      a {
        display: inline-block;
      }
    }
    .icon {
      text-align: center;
      color: white;
      font-size: 35px;
    }
  }
}
</style>

<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="content">
      <a href="#">
        <img src="@/assets/images/logo.png" alt="Appsolot " />
      </a>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In natus dicta
        nemo aspernatur repellendus suscipit eveniet unde quibusdam officiis,
        dignissimos, iusto recusandae sequi corporis blanditiis modi magnam
        voluptatem? Optio, aliquid.
      </p>
      <ul class="list">
        <li class="item">
          <a><fa class="icon" :icon="['fab', 'instagram']" /></a>
        </li>
        <li class="item">
          <a><fa class="icon" :icon="['fab', 'whatsapp']" /></a>
        </li>
        <li class="item">
          <a><fa class="icon" :icon="['fab', 'github']" /></a>
        </li>
        <li class="item">
          <a><fa class="icon" :icon="['fab', 'linkedin']" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  padding: 80px 100px 80px 100px;
  width: 100%;
  background-color: #152136;
  .content {
    text-align: center;
    padding-left: 250px;
    padding-right: 250px;
    a {
      width: 150px;
      img {
        width: 150px;
        cursor: pointer;
      }
    }
    p {
      margin-top: 50px;
      color: white;
      font-size: 1.2rem;
    }
  }
}
.list {
  margin-top: 50px;
  display: flex;
  padding: 0px 150px;
  justify-content: space-around;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c2940;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-out 0.1s;
    cursor: pointer;
    &:hover {
      background-color: #754ef9;
      .icon {
        color: white;
      }
    }

    .icon {
      color: rgb(173, 173, 173);
      font-size: 2rem;
    }
  }
}
</style>

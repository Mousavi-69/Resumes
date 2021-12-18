<script setup lang="ts">
import buttonVue from './Button.vue';</script>
<template>
  <div class="container">
    <section class="form">
      <form>
        <input type="text" name="name" placeholder="نام و نام خانوادگی" />
        <input type="text" name="email" placeholder="پست الکترونیک" />
        <input type="text" name="message" class="request" placeholder="متن درخواست" />
      </form>
<buttonVue class="btn" :text="'ارسال  پیام'" :id="id"
          :width-btn="170"
          :height-btn="55"
          :bg-color="'#754ef9'"
          :text-color="'white'"
          :hover-bg-color="'white'"
          :hover-text-color="'#754ef9'"
          :border-color="'#754ef9'"
        ></buttonVue>    </section>
    <section class="map"></section>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  input {
    width: 100%;
    height: 60px;
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 8px;
    
    font-size: 14px;
    color: #8a8fa3;
    text-align: right;
    &:focus{
   outline: none !important;
    border-color: #754ef9;
    }
  }
  .request {
    width: 100%;
    height: 140px;
    padding: 10px;
    margin-bottom: 30px;
  }
}
</style>

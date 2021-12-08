<script setup lang="ts">
import buttonVue from "../Button.vue";
</script>
<template>
  <div class="container">
    <div class="header">
      <h3>Html/css</h3>
    </div>
    <div class="section1">
      <h3>مدیریت پروژه ساده برای تیم ها و مشاغل کوچک.</h3>
      <h2>425000</h2>
    </div>
    <hr />
    <div class="section2">
      <h3>وظایف نامحدود</h3>
      <h3>پروژه های خصوصی</h3>

      <h3>تیم های نامحدود</h3>

      <h3>API</h3>
    </div>
    <div class="footer">
      <buttonVue
        class="btn"
        :width-btn="160"
        :height-btn="50"
        :text="'افزودن به سبد خرید '"
        :id="'#'"
        :bg-color="'#754ef9'"
        :text-color="'white'"
        :hover-bg-color="'white'"
        :hover-text-color="'#754ef9'"
        :border-color="'#754ef9'"
      ></buttonVue>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 350px;
  height: 480px;
  background-color: rgb(97, 44, 44);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 100px;
  border: 1px solid rgb(196, 194, 194);
  border-radius: 8px;
  transition: all 0.3s ease-out 0.2s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1px 15px 5px rgb(216, 216, 216);
  }
}
.header {
  padding: 2px;
  background-color: #754ef9;
}
.section1 {
  padding: 10px 30px;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 80px;
}
</style>

<script setup lang="ts">
import buttonVue from "./Button.vue";
</script>
<template>
  <section class="container">
    <div class="content">
      <h1>شما در حال مطالعه رزومه من هستید</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus
        quod cum maxime nobis a, cumque, tenetur rem officiis totam commodi!
        Quae error quisquam maiores nesciunt, deleniti provident tempore non!
      </p>
      <footer class="footer">
        <buttonVue
          class="btn"
          :width-btn="190"
          :height-btn="60"
          :text="'نمونه کارهای آنلاین '"
          :id="'#'"
          :bg-color="'white'"
          :text-color="'#754ef9'"
          :hover-bg-color="'#754ef9'"
          :hover-text-color="'white'"
          :border-color="'#754ef9'"
        ></buttonVue>
        <buttonVue
          class="btn"
          :width-btn="190"
          :height-btn="60"
          :text="'دانلود دانلود اپلیکیشن'"
          :id="'#'"
          :bg-color="'rgba(117, 78, 249, 0.1)'"
          :text-color="'white'"
          :hover-bg-color="'rgba(255, 255, 255, 0.4)'"
          :hover-text-color="'white'"
          :border-color="'white'"
        ></buttonVue>
      </footer>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  background-image: url("@/assets/images/call-to-action.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  .content {
    width: 100%;
    height: 493px;
    background-color: rgba(117, 78, 249, 0.7);
    text-align: center;
    box-sizing: border-box;
    padding: 40px 100px;
    h1 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      margin-top: 70px;
    }
    p {
      color: white;
      font-size: 1.2rem;
      padding: 1px 150px;
    }
  }
}
.footer {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .btn {
    margin: 10px;
  }
}
</style>

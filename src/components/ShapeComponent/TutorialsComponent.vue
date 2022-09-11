<script setup lang="ts">
import buttonVue from "../Button.vue";
const props = defineProps<{
  title: { type: string; default: "نام دوره" };
  description: { type: string; default: "توضیحات دوره" };
  price: { type: string; default: "رایگان" };
  section1: { type: string; default: "دسترسی به کتاب ها" };
  section2: { type: string; default: "پشتیبانی" };
  section3: { type: string; default: "عضویت در باشگاه مغز" };
  section4: { type: string; default: "هدیه:تم علوم شناختی"; required: false };
}>();
</script>
<template>
  <div class="container">
    <div class="header">
      <h3 class="title">{{ props.title }}</h3>
    </div>
    <div class="section1">
      <h4 class="description">{{ props.description }}</h4>
      <div class="price">
        <h4>{{ props.price }}</h4>
        <h5 class="vahed">تومان</h5>
      </div>
      <hr />
    </div>

    <div class="section2">
      <h4>{{ props.section1 }}</h4>
      <h4>{{ props.section2 }}</h4>

      <h4>{{ props.section3 }}</h4>

      <h4>{{ props.section4 }}</h4>
    </div>
    <div class="footer">
      <buttonVue
        class="btn"
        :width-btn="100"
        :height-btn="40"
        :text="'ثبت نام  '"
        :id="'#'"
        :bg-color="'#754ef9'"
        :text-color="'white'"
        :hover-bg-color="'white'"
        :hover-text-color="'#754ef9'"
        :border-color="'#754ef9'"
      ></buttonVue>
      <div class="show">
        <h3>مشاهده دوره</h3>
        <fa class="icon" :icon="['fab', 'instagram']" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 300px;
  height: 430px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 10px;
  border: 1px solid rgb(196, 194, 194);
  border-radius: 8px;
  transition: all 0.2s ease-out 0.2s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 1px 15px 5px rgb(216, 216, 216);
  }
}
.header {
  height: 50px;
  background-color: #754ef9;
  .title {
    color: white;
  }
}
.section1 {
  height: 120px;
  padding-right: 30px;
  padding-left: 30px;
  line-height: 20px;
  .description {
    height: 60px;
  }
  .price {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .vahed {
      padding-right: 5px;
      color: black;
    }
  }
}
.section2 {
  height: 200px;
}

.footer {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

    .show{
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;

.icon {
      color: rgb(46, 44, 44);
      font-size: 1.5rem;
      margin-right: 7px;
    }
    &:hover{
     color: #754ef9;
     .icon{
      color: #754ef9;
     }
    }
    }
}
</style>

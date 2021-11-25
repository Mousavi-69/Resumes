import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main_page",
    component: () => import("./pages/Main_page.vue")

  },
 
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
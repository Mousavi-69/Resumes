import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main_page",
    component: () => import("@/pages/Main_page.vue")

  },
  {
    path: "/tutorial",
    name: "tutorial_page",
    component: () => import("@/pages/Tutorial_page.vue")

  },
 
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
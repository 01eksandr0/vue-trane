import MainPage from "../pages/MainPage.vue";
import UserPage from "../pages/UserPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import PostPage from "../pages/PostPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/"),
});

export default router;

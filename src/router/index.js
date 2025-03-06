import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import GetWordDefPage from "../views/GetWordDefPage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      title: "Home Page"
    }
  },
  {
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About Page"
    }
  },
  {
    path: "/get-word-def",
    component: GetWordDefPage,
    meta: {
      title: "API | Get Word Definitions"
    }
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title || "Web API Getter";
});

export default router;
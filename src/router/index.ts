// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostItemDetailView from "../views/PostItemDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "PostList",
    component: PostListView,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostItemDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

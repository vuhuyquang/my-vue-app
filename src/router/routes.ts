import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/default/index.vue"),
    children: [
      {
        path: "",
        name: "TrangChu",
        component: () => import("@/pages/blog/home/index.vue"),
      },
      {
        path: "bai-viet/",
        name: "BaiViet",
        component: () => import("@/pages/blog/posts/index.vue"),
      },
      {
        path: "lien-he/",
        name: "LienHe",
        component: () => import("@/pages/blog/contact/index.vue"),
      },
    ],
  },
];

export default routes;

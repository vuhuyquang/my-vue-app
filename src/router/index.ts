import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/index.vue'),
    children: [
      {
        path: '',
        name: 'TrangChu',
        component: () => import('@/pages/blog/home/index.vue'),
      },
      {
        path: 'bai-viet/:slug',
        name: 'BaiViet',
        component: () => import('@/pages/blog/posts/index.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
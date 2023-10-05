import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 旅館房型總覽
    {
      path: '/',
      name: 'hotel',
      component: () => import('../views/HotelView.vue'),
    },
    // 旅館房型資訊
    {
      path: '/room/:id',
      name: 'room',
      component: () => import('../views/RoomView.vue'),
    },
    // 旅館員工資訊
    {
      path: '/employee/:id',
      name: 'employee',
      component: () => import('../views/EmployeeView.vue'),
    },
  ],
});

export default router;

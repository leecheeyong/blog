export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:id',
    name: 'Blog',
    component: () => import('@/views/Blog.vue')
  }
]

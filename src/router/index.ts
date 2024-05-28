import { createRouter, createWebHistory, type RouteComponent } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: (): Promise<RouteComponent> =>
                import('../views/Home/HomeViewModel.vue'),
            meta: { requiresAuth: false },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: { requiresAuth: true },
            // route level code-splitting
            // this generates a separate chunk (DashboardView.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: (): Promise<RouteComponent> =>
                import('../views/Dashboard/DashboardView.vue'),
        },
    ],
})

export default router

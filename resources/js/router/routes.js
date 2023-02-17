export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../layout/MainLayout'),
        meta: {requiresAuth: true},
    }
]

import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import ThemesPage from "@/views/ThemesPage.vue";
import ThemeDetailsPage from "@/views/ThemeDetailsPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/themes'
    },
    {
        path: '/themes',
        name: 'themes',
        component: ThemesPage
    },
    {
        path: '/themes/:id',
        name: 'theme',
        component: ThemeDetailsPage
    },
    {
        path: '/questions/:id',
        name: 'question',
        component: ThemeDetailsPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

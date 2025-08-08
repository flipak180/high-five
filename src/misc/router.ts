import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import QuestionPage from "@/views/QuestionPage.vue";
import HomePage from "@/views/HomePage.vue";
import ClassicPage from "@/views/ClassicPage.vue";
import ThemesPage from "@/views/ThemesPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/themes',
        name: 'themes',
        component: ThemesPage
    },
    {
        path: '/classic',
        name: 'classic',
        component: ClassicPage
    },
    {
        path: '/questions/:id',
        name: 'question',
        component: QuestionPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

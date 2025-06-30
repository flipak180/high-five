import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import QuestionPage from "@/views/QuestionPage.vue";
import HomePage from "@/views/HomePage.vue";
import ThemePage from "@/views/ThemePage.vue";

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
        path: '/themes/:id',
        name: 'theme',
        component: ThemePage
    },
    {
        path: '/themes/:theme_id/question/:question_id',
        name: 'question',
        component: QuestionPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

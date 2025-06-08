<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import router from "@/router";
import TheCard from "@/components/TheCard.vue";

const route = useRoute();
const theme_id = +route.params.id;
const questions = ref([])

onMounted(async () => {
    const data = await import(`@/data/${theme_id}/questions-list.ts`);
    questions.value = data.default;
})

function handleClick(question) {
    router.push({
        name: 'question',
        params: {
            theme_id: theme_id,
            question_id: question.id,
        }
    })
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <ion-title>Выбор вопроса</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="questions">
                <the-card class="question" v-for="question in questions" :key="question.id" @click="handleClick(question)">
                    <div class="question__img">
                        <div class="question__title">
                            {{ question.title }}
                        </div>
                    </div>
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.questions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
}
.question {

    &__img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        padding: 8px;
        text-align: center;
        background: #333;
        height: 60px;
    }
    &__title {

    }
}
</style>

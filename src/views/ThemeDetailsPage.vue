<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import TheCard from "@/components/TheCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Question} from "@/misc/interfaces";
import router from "@/misc/router";

const route = useRoute();
const theme_id = +route.params.id;
const questions = ref([])

onMounted(async () => {
    const data = await import(`@/data/${theme_id}/questions-list.ts`);
    questions.value = data.default;
})

function handleClick(question: Question) {
    if (question.id !== 1) {
        return;
    }

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
                <ion-title>Выбор уровня</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="questions">
                <the-card class="question" :button="question.id === 1" v-for="question in questions" :key="question.id" @click="handleClick(question)">
                    <div class="question__img">
                        <div class="question__title" v-if="question.id === 1">{{ question.title }}</div>
                        <div class="question__title" v-else>
                            <FontAwesomeIcon class="theme__icon" :icon="faLock" />
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
    opacity: .7;

    &.button {
        opacity: 1;
    }

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

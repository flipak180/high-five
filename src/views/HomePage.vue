<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {onMounted, ref} from "vue";
import TheCard from "@/components/TheCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Question} from "@/misc/interfaces";
import router from "@/misc/router";
import {faCheck, faEllipsis, faLock} from "@fortawesome/free-solid-svg-icons";
import {QuestionStatuses} from "@/mappers/QuestionMapper";
import format from "@/misc/format";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";

const questions = ref<Question[]>([])
const questionsStore = useQuestionsStore()
const progressStore = useProgressStore()

onMounted(async () => {
    questions.value = questionsStore.questions;
    console.log(progressStore.totalAnswers);
})

function handleClick(question: Question) {
    if (question.status === QuestionStatuses.LOCKED) {
        return;
    }

    router.push({name: 'question', params: {id: question.id}})
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Выбор уровня</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="questions">
                <the-card class="question" :class="'status-' + question.status" v-for="(question, i) in questions" :key="question.id" @click="handleClick(question)">
                    <span class="question__number">{{ format.levelIndex(i) }}</span>
                    <FontAwesomeIcon class="question__icon" :icon="faLock" v-if="question.status === QuestionStatuses.LOCKED" />
                    <FontAwesomeIcon class="question__icon" :icon="faEllipsis" v-if="question.status === QuestionStatuses.IN_PROGRESS" />
                    <FontAwesomeIcon class="question__icon" :icon="faCheck" v-if="question.status === QuestionStatuses.DONE" />
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
}
.questions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 16px;
    max-width: 256px;
    margin: 0 auto;

    .question {
        aspect-ratio: 2/1;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &.status-0 {
            background: var(--grey-light);
        }
        &.status-1 {
            background: #FFD166;
        }
        &.status-2 {
            background: #06D6A0;
        }

        &__number {
            font-size: 20px;
        }

        &__icon {
            font-size: 24px;
        }
    }
}
</style>

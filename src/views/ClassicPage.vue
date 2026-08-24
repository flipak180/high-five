<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import TheCard from "@/components/TheCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Question} from "@/misc/interfaces";
import router from "@/misc/router";
import {QuestionStatuses} from "@/mappers/QuestionMapper";
import format from "@/misc/format";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";
import HeaderScore from "@/components/HeaderScore.vue";
import {useCluesStore} from "@/stores/clues";
import {ref} from "vue";
import TheBackButton from "@/components/TheBackButton.vue";

const questionsStore = useQuestionsStore()
const progressStore = useProgressStore()
const cluesStore = useCluesStore()
const totalClicks = ref(0)

function handleClick(question: Question) {
    if (question.status === QuestionStatuses.LOCKED) {
        return;
    }

    router.push({name: 'question', params: {id: question.id}})
}

function resetProgress() {
    totalClicks.value++;
    if (totalClicks.value >= 5) {
        progressStore.reset()
        cluesStore.reset()
    }
}
</script>

<template>
    <ion-page>
        <ion-header @click="resetProgress">
            <ion-toolbar>
                <TheBackButton slot="start" />
                <ion-title>Выбор уровня</ion-title>
                <HeaderScore slot="end" />
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="questions">
                <the-card class="question" :class="'status-' + question.status" v-for="(question, i) in questionsStore.questions" :key="question.id" @click="handleClick(question)">
                    <span class="question__number">{{ format.levelIndex(i) }}</span>
                    <FontAwesomeIcon class="question__icon" :icon="question.icon" />
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
    color: var(--white);
}
ion-content {
    --background: url('@/assets/escheresque.jpg');
}
.questions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 16px;
    max-width: 256px;
    margin: 0 auto;
    color: var(--white);

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

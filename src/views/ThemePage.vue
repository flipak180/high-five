<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import TheCard from "@/components/TheCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Question} from "@/misc/interfaces";
import router from "@/misc/router";
import ThemesList from "@/data/themes-list";
import helpers from "@/misc/helpers";
import {faLock} from "@fortawesome/free-solid-svg-icons";

const route = useRoute();
const theme_id = +route.params.id;
const questions = ref([])

const theme = computed(() => {
    return ThemesList.find(theme => theme.id === theme_id);
})

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

const toolbarStyles = {
    '--border-color': helpers.getColor(theme_id),
    '--background': helpers.getColor(theme_id),
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar :style="toolbarStyles">
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ theme?.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="questions">
                <the-card class="question" :class="{locked: question.id !== 1}" :button="question.id === 1" v-for="question in questions" :key="question.id" @click="handleClick(question)">
                    <span class="question__number">001</span>
                    <FontAwesomeIcon class="question__icon" :icon="faLock" />
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-back-button {
    --color: #fff;
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
        background: var(--grey-light);
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__number {
            font-size: 20px;
        }

        &__icon {
            font-size: 24px;
        }
    }
}
</style>

<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import TheCard from "@/components/TheCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Question} from "@/misc/interfaces";
import router from "@/misc/router";
import ThemesList from "@/data/themes-list";
import helpers from "@/misc/helpers";
import TheText from "@/components/TheText.vue";
import TheFlex from "@/components/TheFlex.vue";
import TheLabel from "@/components/TheLabel.vue";

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
                    <the-flex column v-if="question.id === 1">
                        <the-label class="difficulty" :color="question.difficulty.color">{{ question.difficulty.title }}</the-label>
                        <the-text type="h3">{{ question.title }}</the-text>
<!--                        <the-flex>-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircleCheck" />-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircleCheck" />-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircleCheck" />-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircle" />-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircle" />-->
<!--                            <FontAwesomeIcon class="theme__icon" :icon="faCircle" />-->
<!--                        </the-flex>-->
                        <div class="progress">
                            <span class="done"></span>
                            <span class="done"></span>
                            <span class="done"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </the-flex>
                    <the-flex column v-else>
                        <the-label class="difficulty" :color="question.difficulty.color">{{ question.difficulty.title }}</the-label>
                        <FontAwesomeIcon class="theme__icon" :icon="faLock" />
                        <the-text type="small">Откройте ещё 5 слов</the-text>
                    </the-flex>
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
    grid-template-columns: 1fr;
    gap: 8px;
}
.question {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 16px;
    text-align: center;
    background-color: var(--white);
    border: 2px solid rgba(0, 0, 0, 0.75);
    color: rgba(0, 0, 0, 0.75);
    height: 80px;
    position: relative;
    overflow: hidden;

    &.locked {
        background-color: rgba(0, 0, 0, 0.75);
        border-color: rgba(0, 0, 0, 0.75);
        color: var(--white);
    }

    .progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        //height: 80px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        opacity: .5;
        border-radius: 8px;

        span {
            background: rgba(0, 0, 0, 0.75);

            &.done {
                background: green;
            }
        }
    }

    .difficulty {
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>

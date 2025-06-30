<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {onMounted, Ref, ref, useTemplateRef} from "vue";
import {Haptics, NotificationType} from "@capacitor/haptics";
import {Question} from "@/misc/interfaces";
import {useProgressStore} from "@/misc/progress";
import helpers from "@/misc/helpers";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const route = useRoute();
const theme_id = +route.params.theme_id;
const question_id = +route.params.question_id;
const question = ref<Question>()

const autofocus: Ref = useTemplateRef('autofocus');
const userAnswer = ref('')
const progressStore = useProgressStore()
const error = ref<boolean>(false)
const opened = ref<number[]>([])

onMounted(async () => {
    const data = await import(`@/data/${theme_id}/${question_id}.ts`);
    question.value = data.default;

    setFocus()
    setTimeout(() => {
        setFocus()
    }, 500)
})

async function submitAnswer() {
    error.value = false;
    const existedAnswer = question.value.answers
        .find(answer => [answer.text, ...answer.synonyms].map(answer => answer.toLowerCase()).includes(userAnswer.value.toLowerCase()));
    if (existedAnswer) {
        console.log(existedAnswer);
        // if (theme_id in progressStore.progress && question_id in progressStore.progress[theme_id]) {
        //     progressStore.progress[theme_id][question_id].push(existedAnswer.id)
        // } else {
        //     progressStore.progress[theme_id] = {
        //         question_id: [existedAnswer.id],
        //     };
        // }

        opened.value.push(existedAnswer.id)
    } else {
        error.value = true;
        await Haptics.notification({ type: NotificationType.Error });
    }
    userAnswer.value = '';
    setFocus()
}

function setFocus() {
    if (!autofocus.value) {
        return;
    }
    autofocus.value.focus()
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
                <ion-title>Вкусная сладость</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="answers ion-padding ion-margin-vertical">
                <div class="answer" v-for="answer in question?.answers" :key="answer.id" :class="{ opened: opened.includes(answer.id) }">
                    <div class="answer__text">{{ answer.text }}</div>
                    <div class="answer__percent" :style="{backgroundColor: helpers.getColor(theme_id)}">
                        {{ answer.percent }} <span>%</span>
                    </div>
                </div>
            </div>
            <form class="form" @submit.prevent="submitAnswer">
                <input v-model="userAnswer" type="text" inputmode="text" aria-label="Ответ" ref="autofocus"
                       @blur="setFocus" id="user_answer" class="form__input" placeholder="Введите слово...">
                <div class="form__button" @click="submitAnswer">
                    <FontAwesomeIcon class="form__icon" :icon="faArrowRight" />
                </div>
            </form>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-back-button {
    --color: #fff;
}
.answers {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--ion-padding);
    max-width: 450px;
    margin: 0 auto;

    .answer {
        width: 100%;
        height: 45px;
        position: relative;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: var(--grey-light);

        &__percent {
            color: var(--white);
            position: absolute;
            left: 0;
            top: 0;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 14px;
            border-radius: 8px;

            span {
                font-size: 10px;
            }
        }

        &__text {
            font-size: 18px;
            font-weight: 500;
            color: var(--black);
            text-align: center;
        }
    }
}

.form {
    position: fixed;
    bottom: var(--ion-safe-area-bottom, 0);
    left: 0;
    margin: var(--ion-padding);
    width: calc(100% - 2 * var(--ion-padding));

    &__input {
        background: var(--grey-light);
        border-radius: 8px;
        padding: 5px 10px;
        outline: none;
        border: none;
        display: block;
        font-size: 16px;
        width: 100%;
        height: 40px;
        color: var(--black);
    }

    &__button {
        position: absolute;
        right: 0;
        top: 0;
        margin: 4px;
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        height: calc(100% - 8px);
        aspect-ratio: 1 / 1;
        color: var(--black);
    }
}
</style>

<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {onMounted, Ref, ref, useTemplateRef} from "vue";
import {Haptics, NotificationType} from "@capacitor/haptics";
import {send} from "ionicons/icons";
import {Question} from "@/interfaces";

const route = useRoute();
const theme_id = +route.params.theme_id;
const question_id = +route.params.question_id;
const question = ref<Question>()

const autofocus: Ref = useTemplateRef('autofocus');
const userAnswer = ref('')
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
        opened.value.push(existedAnswer.id)
    } else {
        error.value = true;
        await Haptics.notification({ type: NotificationType.Error });
    }
    userAnswer.value = '';
    setFocus()
}

function setFocus() {
    autofocus.value.focus()
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <ion-title>Вкусная сладость</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="question">
                <div class="question__grid ion-padding ion-margin-bottom">
                    <div class="answer" v-for="answer in question?.answers" :key="answer.id" :class="{ opened: opened.includes(answer.id) }">
                        <div class="answer__content">
                            <div class="answer__text">{{ answer.text }}</div>
                            <div class="answer__percent">{{ answer.percent }}</div>
                        </div>
                    </div>
                </div>
                <form :class="{shake: error}" @submit.prevent="submitAnswer">
                    <input v-model="userAnswer" type="text" inputmode="text" aria-label="Ответ" ref="autofocus" @blur="setFocus">
                    <div class="button" @click="submitAnswer">
                        <ion-icon slot="icon-only" :icon="send"></ion-icon>
                    </div>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.question {

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
}

form {
    position: fixed;
    bottom: var(--ion-safe-area-bottom, 0);
    left: 0;
    width: 100%;
    padding: 10px;
    background: #000;

    input {
        background: var(--grey);
        border-radius: 4px;
        padding: 10px;
        outline: none;
        border: none;
        width: 100%;
        display: block;
        font-size: 16px;
    }

    .button {
        background: transparent;
        padding: 6px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 3px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 5;
        font-size: 24px;
    }
}

.answer {
    background: #333;
    border-radius: 8px;
    font-size: 18px;
    height: 60px;
    padding: 10px 15px;

    &__content {
        opacity: 0;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    &.opened &__content {
        opacity: 1;
    }

    &__percent {
        padding: 10px;
    }

    &__text {
        font-size: 18px;
        flex-grow: 1;
    }
}

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>

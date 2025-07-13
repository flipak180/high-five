<script setup lang="ts">
import {alertController, IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/vue';
import {useRoute} from "vue-router";
import {computed, onMounted, Ref, ref, useTemplateRef} from "vue";
import {Haptics, NotificationType} from "@capacitor/haptics";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowRight, faQuestion} from "@fortawesome/free-solid-svg-icons";
import {useQuestionsStore} from "@/stores/questions";
import {Question} from "@/misc/interfaces";
import {useProgressStore} from "@/stores/progress";
import HeaderScore from "@/components/HeaderScore.vue";

const route = useRoute();
const questionsStore = useQuestionsStore()
const progressStore = useProgressStore()
const question = computed<Question>(() => {
    return questionsStore.questions.find(item => item.id === +route.params.id) || {};
})
const progress = computed<number[]>(() => {
    return progressStore.progress[question.value.id] || [];
})

const autofocus: Ref = useTemplateRef('autofocus');
const userAnswer = ref('')
const error = ref<boolean>(false)

onMounted(async () => {
    progressStore.create(question.value.id);

    setFocus()
    setTimeout(() => {
        setFocus()
    }, 500)
})

async function submitAnswer() {
    error.value = false;
    const answerIndex = question.value.answers
        .findIndex(answer => [answer.title, ...answer.synonyms].map(answer => answer.toLowerCase()).includes(userAnswer.value.toLowerCase()));
    if (answerIndex > -1) {
        progressStore.add(question.value.id, answerIndex + 1);
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

async function showClue() {
    // const modal = await modalController.create({
    //     component: ClueModal,
    //     cssClass: 'clue-modal',
    // });
    //
    // await modal.present();

    const alert = await alertController.create({
        header: 'Открыть первую букву?',
        message: 'A message should be a short, complete sentence.',
        buttons: [
            {
                text: 'Нет',
                role: 'cancel',
                handler: () => {
                    console.log('Alert canceled');
                },
            },
            {
                text: 'Да',
                role: 'confirm',
                handler: () => {
                    console.log('Alert confirmed');
                },
            },
        ],
    });

    await alert.present();
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <HeaderScore slot="end" />
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="answers">
                <div class="answer" v-for="(answer, i) in question?.answers" :key="answer.id" :class="{ opened: progress.includes(i + 1) }" @click="showClue">
                    <div class="answer__text">{{ answer.title }}</div>
                    <div class="answer__percent">
                        <div>
                            <span>{{ answer.percentage }}</span>
                            <small>%</small>
                        </div>
                    </div>
                    <div class="answer__clue" v-if="!progress.includes(i + 1)">
                        <FontAwesomeIcon class="form__icon" :icon="faQuestion" />
                    </div>
                </div>
            </div>
            <div class="bottom">
                <h1>{{ question.title }}</h1>
                <form class="form" @submit.prevent="submitAnswer">
                    <input v-model="userAnswer" type="text" inputmode="text" aria-label="Ответ" ref="autofocus"
                           @blur="setFocus" id="user_answer" class="form__input" placeholder="Ваш вариант...">
                    <div class="form__button" @click="submitAnswer">
                        <FontAwesomeIcon class="form__icon" :icon="faArrowRight" />
                    </div>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
    color: var(--white);
}
ion-back-button {
    --color: #fff;
}
.answers {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    max-width: 400px;
    margin: 0 auto;

    .answer {
        width: 100%;
        aspect-ratio: 8 / 1;
        position: relative;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: var(--grey-light);

        &__clue {
            background-color: var(--yellow);
            color: var(--white);
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translate(0, -50%);
            height: 80%;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 16px;
            border-radius: 8px;
        }

        &__percent {
            background-color: #EF476F;
            color: var(--white);
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 16px;
            border-radius: 8px;

            small {
                font-size: 12px;
            }
        }

        &__text {
            font-size: 18px;
            font-weight: 500;
            color: var(--black);
            text-align: center;
            opacity: 0;
        }

        &.opened .answer__text {
            opacity: 1;
        }
    }
}

.bottom {
    position: fixed;
    bottom: var(--ion-safe-area-bottom, 0);
    left: 0;
    margin: 16px;
    width: calc(100% - 32px);

    h1 {
        color: var(--black);
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 var(--ion-padding);
    }

    .form {
        position: relative;

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
}
</style>

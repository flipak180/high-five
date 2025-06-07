<script setup lang="ts">
import {onMounted, Ref, ref, useTemplateRef} from "vue";
import {IonIcon} from '@ionic/vue';
import {send} from "ionicons/icons";
import {Haptics, NotificationType} from "@capacitor/haptics";
import helpers from "@/helpers";

const autofocus: Ref = useTemplateRef('autofocus');
const answer = ref('')
const error = ref(false)

onMounted(() => {
    setTimeout(() => {
        setFocus()
    }, 500)
})

async function submitAnswer() {
    error.value = false;
    if (Math.floor((Math.random() * 100) + 1) % 2) {
        //
    } else {
        error.value = true;
        await Haptics.notification({ type: NotificationType.Error });
    }
    answer.value = '';
    setFocus()
}

function setFocus() {
    autofocus.value.focus()
}
</script>

<template>
    <div class="question">
        <div class="question__grid ion-padding ion-margin-bottom">
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">10%</div>
                <div class="answer__text" v-show="false">Печенье</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">50%</div>
                <div class="answer__text" v-show="false">Мороженое</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">3%</div>
                <div class="answer__text" v-show="false">Кукурузные палочки</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">12%</div>
                <div class="answer__text" v-show="false">Буше</div>
            </div>
            <div class="answer opened" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">3%</div>
                <div class="answer__text" v-show="true">Шоколадный батончик</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">1%</div>
                <div class="answer__text" v-show="false">Мармелад</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">21%</div>
                <div class="answer__text" v-show="false">Пирожное</div>
            </div>
            <div class="answer opened" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">16%</div>
                <div class="answer__text" v-show="true">Торт</div>
            </div>
            <div class="answer" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="answer__percent">32%</div>
                <div class="answer__text" v-show="false">Зефир</div>
            </div>
        </div>
        <form :class="{shake: error}" @submit.prevent="submitAnswer">
            <input v-model="answer" type="text" inputmode="text" aria-label="Ответ" ref="autofocus" @blur="setFocus">
            <div class="button" @click="submitAnswer">
                <ion-icon slot="icon-only" :icon="send"></ion-icon>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.question {

    &__grid {
        display: grid;
        grid-template-columns: repeat(4, 150px);
        grid-gap: 4px;
        grid-auto-flow: row dense;
        text-align: center;
        overflow-x: scroll;
    }
}

form {
    position: fixed;
    bottom: var(--ion-safe-area-bottom, 0);
    left: 0;
    width: 100%;
    padding: 10px;

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
    padding: 40px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background: violet;
    width: 150px;
    height: 150px;
    font-size: 24px;

    &__percent {
        border: 5px solid #fff;
        padding: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        width: 75px;
        height: 75px;
        min-width: 75px;
        min-height: 75px;
    }

    &__text {
        font-size: 18px;
    }

    &.opened {
        font-size: 18px;
    }

    &.opened &__percent {
        border: 3px solid #fff;
        padding: 3px;
        width: 50px;
        height: 50px;
        min-width: 50px;
        min-height: 50px;
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

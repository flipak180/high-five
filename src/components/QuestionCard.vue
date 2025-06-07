<script setup lang="ts">
import {ref} from "vue";
import {IonInput} from '@ionic/vue';
import {useAutofocus} from "@/composables/useAutofocus";

useAutofocus()
const answer = ref('')
</script>

<template>
    <div class="question">
        <div class="question__grid ion-padding ion-margin-bottom">
            <div class="answer_item a">A</div>
            <div class="answer_item b">B</div>
            <div class="answer_item c">C</div>
            <div class="answer_item d">D</div>
            <div class="answer_item e">E</div>
            <div class="answer_item f">F</div>
            <div class="answer_item g">G</div>
            <div class="answer_item h">H</div>
            <div class="answer_item f">I</div>
        </div>
        <div class="answer_input">
            <ion-input v-model="answer" type="text" inputmode="text" aria-label="Ответ" ref="autofocus"></ion-input>
        </div>
    </div>
</template>

<style scoped lang="scss">
.question {

    &__grid {
        display: grid;
        grid-template-columns: repeat(4, 150px);
        grid-gap: 10px;
        grid-auto-flow: row dense;
        text-align: center;
        overflow-x: scroll;
    }
}

.answer_input {
    background: rgb(13, 13, 13);
    border-top: 0.8px solid rgb(38, 38, 38);
    padding: 5px;
}
ion-input {
    --background: var(--grey);
    --border-radius: 4px;
    --padding-start: 8px;
    --padding-end: 8px;
}

.answer_item {
    padding: 40px;
    font-size: 1.5em;
    border: 1px solid black;
}

.b {
    background: violet;
    padding: 100px 0;
    grid-area: 2 / 1 / 4 / 3;
}

.a {
    background: violet;
    grid-area: 1 / 2 / 2 / 3;
}

.c {
    background: orange;
    grid-row-start: 1;
    grid-row-end: 3;
}

.d {
    background: orange;
    grid-row-start: 1;
    grid-row-end: 2;
}

.g {
    background: lightgreen;
    grid-column-start: 3;
    grid-column-end: 5;
}

.h {
    background: lightgreen;
    grid-column-start: 2;
    grid-column-end: 4;
}
</style>

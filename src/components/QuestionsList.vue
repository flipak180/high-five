<script setup lang="ts">

import {useRoute} from "vue-router";
import {computed} from "vue";
import questionsList from "@/data/questionsList";
import router from "@/router";
import TheCard from "@/components/TheCard.vue";

const route = useRoute();
const themeId = +route.params.id;
const questions = computed(() => {
    return questionsList.filter(question => question.theme_id === themeId)
})
</script>

<template>
    <div class="questions">
        <the-card class="question" v-for="question in questions" :key="question.id" @click="router.push({ name: 'question', params: { id: question.id } })">
            <div class="question__img">
                <div class="question__title">
                    {{ question.title }}
                </div>
            </div>
        </the-card>
    </div>
</template>

<style scoped lang="scss">
.questions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
}
.question {

    &__img {
        aspect-ratio: 5/1;
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
    }
    &__title {

    }
}
</style>

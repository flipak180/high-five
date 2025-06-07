<script setup lang="ts">
import helpers from "@/helpers";
import TheCard from "@/components/TheCard.vue";
import router from "@/router";

const questions = [
    'Вкусная сладость',
    'Лучший гарнир',
    'Блюда русской кухни',
    'Очень длинный текст для какого-то вопроса',
];
</script>

<template>
    <div class="questions">
        <the-card class="question" v-for="question in questions" :key="question" @click="router.push({ name: 'question', params: { id: 1 } })">
            <div class="question__img" :style="{backgroundColor: helpers.getRandomColor()}">
                <div class="question__title">
                    {{ question }}
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
    }
    &__title {

    }
}
</style>

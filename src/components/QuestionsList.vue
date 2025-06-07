<script setup lang="ts">
import helpers from "@/helpers";
import TheCard from "@/components/TheCard.vue";
import router from "@/router";

const questions = [
    'Знакомство', // место, ред флаги, фото
    'Параметры', // имя, знак зодиака, рост
    'Предпочтения', // еда, спорт, образование
    'Свидание', // место, через сколько, кто платит, ред флаги
    'Отношения', // тип (свободные, серьезные, легкие), афиширование,
    'Досуг', // места, частота,
    'Совместный быт', // готовка, уборка, продукты, квартплата
    'Путешествия', // частота, тут или заграницу, цель - пляж, история..
    'Интимная жизнь', // позы, частота, игрушки, табу
    'Финансы', // заработок партнера, общий бюджет
    'Хобби', //
    'Друзья', //
    'Недвижимость', //
    'Ссоры', // Причины, измены, примирение
    'Расставание', //
    'Эмоции', //
    'Свадьба', //
    'Дети', //
];
</script>

<template>
    <div class="questions">
        <the-card class="question" v-for="question in questions" :key="question" @click="router.push({ name: 'question', params: { id: 1 } })">
            <div class="question__img" :style="{backgroundColor: helpers.getRandomColor()}">

            </div>
            <div class="question__title">
                {{ question }}
            </div>
        </the-card>
    </div>
</template>

<style scoped lang="scss">
.questions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
.question {

    &__img {
        aspect-ratio: 1/1;
        width: 100%;
        border-radius: 8px;
        margin-bottom: 4px;
    }
    &__title {

    }
}
</style>

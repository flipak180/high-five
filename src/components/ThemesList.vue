<script setup lang="ts">
import TheCard from "@/components/TheCard.vue";
import router from "@/router";
import themesList from "@/data/themesList";

// const themes = [
//     'Знакомство', // место, ред флаги, фото
//     'Параметры', // имя, знак зодиака, рост
//     'Предпочтения', // еда, спорт, образование
//     'Свидание', // место, через сколько, кто платит, ред флаги
//     'Отношения', // тип (свободные, серьезные, легкие), афиширование,
//     'Досуг', // места, частота,
//     'Совместный быт', // готовка, уборка, продукты, квартплата
//     'Путешествия', // частота, тут или заграницу, цель - пляж, история..
//     'Интимная жизнь', // позы, частота, игрушки, табу
//     'Финансы', // заработок партнера, общий бюджет
//     'Хобби', //
//     'Друзья', //
//     'Недвижимость', //
//     'Ссоры', // Причины, измены, примирение
//     'Расставание', //
//     'Эмоции', //
//     'Свадьба', //
//     'Дети', //
// ];
</script>

<template>
    <div class="themes">
        <the-card class="theme" v-for="theme in themesList" :key="theme.id" @click="router.push({ name: 'theme', params: { id: theme.id } })">
            <div class="theme__img" :style="{backgroundColor: theme.color}">

            </div>
            <div class="theme__title">
                {{ theme.title }}
            </div>
        </the-card>
    </div>
</template>

<style scoped lang="scss">
.themes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
.theme {

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

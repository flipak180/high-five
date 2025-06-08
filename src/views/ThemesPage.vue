<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import router from "@/router";
import themesList from "@/data/themes-list";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import TheCard from "@/components/TheCard.vue";

function handleClick(theme) {
    router.push({ name: 'theme', params: { id: theme.id } })
}

function getStyleObject(theme) {
    return {
        height: theme.progress + '%',
        backgroundColor: theme.color
    }
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Выбор темы</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="themes">
                <the-card class="theme" v-for="theme in themesList" :key="theme.id" @click="handleClick(theme)">
                    <div class="theme__bg" :style="getStyleObject(theme)"></div>
                    <div class="theme__content">
                        <FontAwesomeIcon class="theme__icon" :icon="theme.icon" />
                        <div class="theme__title">{{ theme.title }}</div>
                    </div>
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.themes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    .theme {
        background: #333;
        aspect-ratio: 1/1;
        border-radius: 8px;
        margin-bottom: 4px;
        position: relative;
        overflow: hidden;

        &__bg {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            background-color: lightgreen;
            z-index: 2;
        }

        &__content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
        }

        &__icon {
            font-size: 36px;
        }
        &__title {
            font-size: 18px;
        }
    }
}
</style>

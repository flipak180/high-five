<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonProgressBar, IonTitle, IonToolbar} from '@ionic/vue';
import themesList from "@/data/themes-list";
import TheCard from "@/components/TheCard.vue";
import {Theme} from "@/misc/interfaces";
import router from "@/misc/router";
import TheText from "@/components/TheText.vue";
import helpers from "@/misc/helpers";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

function handleClick(theme: Theme) {
    router.push({ name: 'theme', params: { id: theme.id } })
}
</script>

<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Выбор темы</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="themes">
                <the-card button class="theme" v-for="theme in themesList" :key="theme.id" @click="handleClick(theme)"
                    :style="{backgroundColor: helpers.getColor(theme.id)}">
                    <div class="theme__title">
                        <FontAwesomeIcon class="theme__icon" :icon="theme.icon" />
                        <the-text type="h2">{{ theme.title }}</the-text>
                    </div>
                    <div class="theme__progress">
                        <the-text type="b">15/15</the-text>
                        <ion-progress-bar :value="theme.progress / 100"></ion-progress-bar>
                    </div>
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-header {

    ion-toolbar {
        --border-color: #7209b7;
        --background: #7209b7;
    }
}
.themes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 16px;
    max-width: 356px;
    margin: 0 auto;

    .theme {
        aspect-ratio: 1/1;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: space-between;
        text-align: center;

        &__title {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        &__icon {
            font-size: 36px;
        }

        &__progress {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        ion-progress-bar {
            height: 4px;
        }
    }
}
</style>

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
                    <FontAwesomeIcon class="icon" :icon="theme.icon" />
                    <the-text type="h2">{{ theme.title }}</the-text>
                    <the-text type="b">15/15</the-text>
                    <ion-progress-bar :value="theme.progress / 100"></ion-progress-bar>
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
    //display: flex;
    //flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    .theme {
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        text-align: center;

        .icon {
            font-size: 36px;
        }

        ion-progress-bar {
            height: 4px;
        }
    }
}
</style>

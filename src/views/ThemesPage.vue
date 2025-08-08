<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonProgressBar, IonTitle, IonToolbar} from '@ionic/vue';
import themesList from "@/data/themes-list";
import TheCard from "@/components/TheCard.vue";
import {Theme} from "@/misc/interfaces";
import router from "@/misc/router";
import helpers from "@/misc/helpers";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import HeaderScore from "@/components/HeaderScore.vue";
import TheBackButton from "@/components/TheBackButton.vue";

function handleClick(theme: Theme) {
    router.push({ name: 'theme', params: { id: theme.id } })
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <TheBackButton slot="start" />
                <ion-title>Выбор темы</ion-title>
                <HeaderScore slot="end" />
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="themes">
                <the-card button class="theme" v-for="theme in themesList" :key="theme.id" @click="handleClick(theme)"
                          :style="{backgroundColor: helpers.getColor(theme.id)}">
                    <div class="theme__top">
                        <FontAwesomeIcon class="theme__icon" :icon="theme.icon" />
                        <span class="theme__title">{{ theme.title }}</span>
                    </div>
                    <div class="theme__bottom">
                        <span class="theme__progress">15/15</span>
                        <ion-progress-bar :value="theme.progress / 100"></ion-progress-bar>
                    </div>
                </the-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
    color: var(--white);
}
.themes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 16px;
    max-width: 400px;
    margin: 0 auto;
    color: var(--white);

    .theme {
        aspect-ratio: 1/1;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: space-between;
        text-align: center;

        &__top, &__bottom {
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
            font-size: 20px;
            font-weight: 500;
        }

        &__progress {
            font-weight: 500;
        }

        ion-progress-bar {
            height: 4px;
            --color: var(--black)
        }
    }
}
</style>

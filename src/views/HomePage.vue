<script setup lang="ts">
import {IonContent, IonPage} from '@ionic/vue';
import TheCard from "@/components/TheCard.vue";
import router from "@/misc/router";
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="the-content">
                <div class="top">
                    <img src="/assets/logo.svg" alt="Дай пять!">
                </div>
                <div class="center">
                    <the-card button class="game-mode" style="background-color: var(--green)">
                        <div class="game-mode__title">
                            Авторское
                        </div>
                    </the-card>
                    <the-card button class="game-mode" style="background-color: var(--yellow)" @click="router.push({ name: 'classic' })">
                        <div class="game-mode__title">
                            Классика
                        </div>
                    </the-card>
                </div>
                <div class="bottom">

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
    color: var(--white);
}
ion-content {
    --background: #EF476F;
}
.the-content {
    height: calc(100vh - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0) - 32px);
    display: grid;
    grid-template-rows: 200px 1fr 200px;
}
.top {
    display: flex;
    align-items: center;

    img {
        animation: breathe 4s ease-in-out infinite;
    }
}
.center {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
}
.bottom {

}
.game-mode {
    color: var(--white);
    border-radius: 8px;
    padding: 20px 15px;

    &__title {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
}

@keyframes breathe {
    0% {
        transform: scale(0.75); /* Slightly smaller than normal */
    }
    50% {
        transform: scale(0.8); /* Slightly larger than normal */
    }
    100% {
        transform: scale(0.75); /* Return to initial smaller scale */
    }
}
</style>

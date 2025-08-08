<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import HeaderScore from "@/components/HeaderScore.vue";
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Дай пять!</ion-title>
                <HeaderScore slot="end" />
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">

        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #EF476F;
    color: var(--white);
}
</style>

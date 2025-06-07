<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <ion-title>Знакомство</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <questions-list />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import QuestionsList from "@/components/QuestionsList.vue";
</script>

<style lang="scss" scoped>

</style>

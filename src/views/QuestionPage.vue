<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Назад"></ion-back-button>
                </ion-buttons>
                <ion-title>Вкусная сладость</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <question-card />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import QuestionCard from "@/components/QuestionCard.vue";
</script>

<style lang="scss" scoped>

</style>

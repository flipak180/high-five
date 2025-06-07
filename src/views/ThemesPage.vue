<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>О чем думают?</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <themes-list />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import ThemesList from "@/components/ThemesList.vue";
</script>

<style lang="scss" scoped>

</style>

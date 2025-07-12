<script setup lang="ts">

import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useProgressStore} from "@/stores/progress";

const progressStore = useProgressStore()
</script>

<template>
    <div class="score">
        {{ progressStore.score }}
        <FontAwesomeIcon class="score__icon" :icon="faCoins" />
    </div>
</template>

<style scoped lang="scss">
.score {
    background: #ed7a96;
    padding: 3px 10px;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &__icon {
        color: #FFD166;
    }
}
</style>

<script setup lang="ts">
import {ref} from "vue";

const touched = ref(false)
</script>

<template>
    <div :class="{touched: touched}" @touchstart="touched = true" @touchend="touched = false">
        <slot />
    </div>
</template>

<style scoped lang="scss">
div {
    transition: all .3s;

    &.touched {
        transform: scale(0.96);
    }
}
</style>

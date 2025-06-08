<script setup lang="ts">
import {ref} from "vue";

defineProps({
    button: {
        type: Boolean,
        default: false,
    }
})

const touched = ref(false)
</script>

<template>
    <div :class="{touched: touched, button: button}" @touchstart="touched = true" @touchend="touched = false">
        <slot />
    </div>
</template>

<style scoped lang="scss">
div {
    transition: all .3s;

    &.button.touched {
        transform: scale(0.96);
    }
}
</style>

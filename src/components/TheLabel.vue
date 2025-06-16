<script setup lang="ts">
import {Colors} from "@/types/enums";

defineProps({
    color: {
        type: Colors,
        default: 'grey'
    },
});
</script>

<template>
    <span :class="{['bg-' + color]: color}">
        <slot />
    </span>
</template>

<style scoped lang="scss">
span {
    border-radius: 10px;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
}
</style>

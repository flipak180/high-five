<script setup lang="ts">
import {Colors, Sizes, TextTypes, Weights} from "@/types/enums";

defineProps({
    weight: {
        type: Weights,
        default: 'regular'
    },
    color: {
        type: Colors,
        default: 'black'
    },
    size: {
        type: Sizes,
        default: 'md'
    },
    type: {
        type: TextTypes,
        default: 'p'
    },
    nowrap: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <span :class="{['weight-' + weight]: weight, ['color-' + color]: color, ['size-' + size]: size, ['text-type-' + type]: type, nowrap: nowrap}">
        <slot />
    </span>
</template>

<style>
.text-type-h1 { font-size: 24px; line-height: 28px; font-weight: 500; }
.text-type-h2 { font-size: 20px; line-height: 24px; font-weight: 500; }
.text-type-h3 { font-size: 18px; line-height: 22px; font-weight: 500; }
.text-type-b { font-size: 16px; line-height: 20px; font-weight: 500; }
.text-type-p { font-size: 16px; line-height: 20px; font-weight: 400; }
</style>

<script setup lang="ts">
import {computed, reactive} from "vue";
import {Aligns, Justifies} from "@/types/enums";

const props = defineProps({
    wrap: {
        type: Boolean,
        default: false
    },
    gap: {
        type: Number,
        default: 8
    },
    gapX: {
        type: Number,
        default: 0
    },
    gapY: {
        type: Number,
        default: 0
    },
    border: {
        type: Boolean,
        default: false
    },
    column: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    align: {
        type: Aligns,
        default: 'stretch'
    },
    justify: {
        type: Justifies,
        default: 'start'
    },
})

const actualGap = computed(() => {
    if (props.gapX && props.gapY) {
        return `${props.gapY}px ${props.gapX}px`;
    }
    if (props.gapX) {
        return `0 ${props.gapX}px`;
    }
    if (props.gapY) {
        return `${props.gapY}px 0`;
    }
    if (props.border) {
        return `20px`;
    }
    return `${props.gap}px`;
})

const classObject = reactive({
    'border': props.border,
    ['align-' + props.align]: props.align,
    ['justify-' + props.justify]: props.justify,
})

const styleObject = reactive({
    'display': 'flex',
    //'align-items': props.center ? 'center' : 'start',
    'gap': actualGap,
    'flex-wrap': props.wrap ? 'wrap' : 'nowrap',
    'flex-direction': props.column ? 'column' : 'row',
})
</script>

<template>
    <div class="the-flex" :style="styleObject" :class="classObject">
        <slot />
    </div>
</template>

<style scoped>
.border {

    & > * {
        position: relative;
    }

    & > *:after {
        content: '';
        height: 100%;
        width: 1px;
        background-color: var(--grey_background);
        display: block;
        position: absolute;
        right: -10px;
        top: 0;
    }

    & > *:last-child:after {
        display: none;
    }
}

</style>

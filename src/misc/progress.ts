import {defineStore} from "pinia";
import {ref} from "vue";

export const useProgressStore = defineStore('progress', () => {

    const progress = ref({})

    return {
        progress
    }

}, {
    persist: true,
})

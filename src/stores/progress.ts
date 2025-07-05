import {defineStore} from "pinia";
import {ref} from "vue";

export const useProgressStore = defineStore('progress', () => {

    const progress = ref<{[key: number]: number[]}>({
        1: [1, 2, 3, 4, 5, 6],
        2: [1, 3, 4],
        3: [],
    })

    function add(questionId: number, answerNumber: number) {
        if (questionId in progress.value) {
            progress.value[questionId].push(answerNumber)
        } else {
            progress.value[questionId] = [answerNumber];
        }
    }

    return {
        progress,
        add,
    }

}, {
    persist: {
        enabled: true
    },
})

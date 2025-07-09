import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useProgressStore = defineStore('progress', () => {

    // const progress = ref<{[key: number]: number[]}>({
    //     1: [1, 2, 3, 4, 5],
    //     2: [1, 3, 4],
    //     3: [],
    // })

    const progress = ref<{[key: number]: number[]}>({})

    const totalAnswers = computed<number>(() => {
        return Object.values(progress.value)
            .map(item => item.length)
            .reduce((a, b) => a + b, 0);
    })

    function add(questionId: number, answerNumber: number) {
        if (questionId in progress.value) {
            progress.value[questionId].push(answerNumber)
        } else {
            progress.value[questionId] = [answerNumber];
        }
    }

    function create(questionId: number) {
        if (questionId in progress.value) {
            return;
        }

        progress.value[questionId] = [];
    }

    return {
        progress,
        add,
        create,
        totalAnswers,
    }

}, {
    persist: {
        enabled: true
    },
})

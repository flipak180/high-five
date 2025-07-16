import {defineStore} from "pinia";
import {ref} from "vue";
import {useProgressStore} from "@/stores/progress";
import {LETTER_CLUE_PRICE} from "@/misc/constants";

export const useCluesStore = defineStore('clues', () => {

    // const clues = ref<{[key: number]: number[]}>({
    //     1: [1, 2, 3, 4, 5],
    //     2: [1, 3, 4],
    //     3: [],
    // })

    const progressStore = useProgressStore()

    const clues = ref<{[key: string]: number[]}>({})

    function add(questionId: number, answerNumber: number) {
        if (progressStore.score < LETTER_CLUE_PRICE) {
            return;
        }

        if (questionId in clues.value) {
            if (!clues.value[questionId].includes(answerNumber)) {
                clues.value[questionId].push(answerNumber)
                progressStore.score -= LETTER_CLUE_PRICE;
            }
        } else {
            clues.value[questionId] = [answerNumber];
            progressStore.score -= LETTER_CLUE_PRICE;
        }
    }

    function reset() {
        clues.value = {}
    }

    return {
        add,
        reset,
        clues,
    }

}, {
    persist: {
        enabled: true
    },
})

import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useQuestionsStore} from "@/stores/questions";

export const useProgressStore = defineStore('progress', () => {

    const SCORE_PER_ANSWER = 10;

    // const progress = ref<{[key: number]: number[]}>({
    //     1: [1, 2, 3, 4, 5],
    //     2: [1, 3, 4],
    //     3: [],
    // })

    const questionsStore = useQuestionsStore()

    const progress = ref<{[key: number]: number[]}>({})
    const score = ref<number>(0)

    const totalAnswers = computed<number>(() => {
        return Object.values(progress.value)
            .map(item => item.length)
            .reduce((a, b) => a + b, 0);
    })

    function add(questionId: number, answerNumber: number) {
        if (questionId in progress.value) {
            if (!progress.value[questionId].includes(answerNumber)) {
                progress.value[questionId].push(answerNumber)
                score.value += SCORE_PER_ANSWER;
            }
        } else {
            progress.value[questionId] = [answerNumber];
            score.value += SCORE_PER_ANSWER;
        }
        questionsStore.update()
    }

    function create(questionId: number) {
        if (questionId in progress.value) {
            return;
        }

        progress.value[questionId] = [];
        questionsStore.update()
    }

    function reset() {
        progress.value = {}
        score.value = 0
    }

    return {
        progress,
        add,
        create,
        reset,
        totalAnswers,
        score,
    }

}, {
    persist: {
        enabled: true
    },
})

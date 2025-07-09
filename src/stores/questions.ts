import {defineStore} from "pinia";
import {ref} from "vue";
import {Question} from "@/misc/interfaces";
import {QuestionMapper} from "@/mappers/QuestionMapper";

export const useQuestionsStore = defineStore('questions', () => {

    const questions = ref<Question[]>([])

    function update() {
        questions.value = questions.value.map(QuestionMapper)
    }

    return {
        questions,
        update
    }

})

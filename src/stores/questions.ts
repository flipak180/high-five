import {defineStore} from "pinia";
import {ref} from "vue";
import {Question} from "@/misc/interfaces";

export const useQuestionsStore = defineStore('questions', () => {

    const questions = ref<Question[]>([])

    return {
        questions
    }

})

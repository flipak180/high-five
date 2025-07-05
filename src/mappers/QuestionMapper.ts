import {useProgressStore} from "@/stores/progress";
import {Question} from "@/misc/interfaces";

export enum QuestionStatuses {
    'LOCKED',
    'IN_PROGRESS',
    'DONE'
}

export function QuestionMapper(question: Question) {
    return {
        ...question,
        status: getQuestionProgressStatus(question),
        opened: getOpenedAnswers(question),
    }
}

function getQuestionProgressStatus(question: Question) {
    const progressStore = useProgressStore()

    if (progressStore.totalAnswers < question.min_answers) {
        return QuestionStatuses.LOCKED;
    }

    if (progressStore.progress.hasOwnProperty(question.id) && Array.isArray(progressStore.progress[question.id]) && progressStore.progress[question.id].length === 6) {
        return QuestionStatuses.DONE;
    }

    return QuestionStatuses.IN_PROGRESS;
}

function getOpenedAnswers(question: Question) {
    const progressStore = useProgressStore()
    if (!progressStore.progress.hasOwnProperty(question.id) || !Array.isArray(progressStore.progress[question.id])) {
        return [];
    }

    return progressStore.progress[question.id];
}

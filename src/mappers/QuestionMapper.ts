import {useProgressStore} from "@/stores/progress";

export enum QuestionStatuses {
    'LOCKED',
    'UNLOCKED',
    'IN_PROGRESS',
    'DONE'
}

export function QuestionMapper(question) {
    return {
        ...question,
        status: getQuestionProgressStatus(question),
        opened: getOpenedAnswers(question),
    }
}

function getQuestionProgressStatus(question) {
    const progressStore = useProgressStore()

    if (progressStore.totalAnswers >= question.min_answers) {

        if (!progressStore.progress.hasOwnProperty(question.id)) {
            return QuestionStatuses.UNLOCKED;
        }

        if (Array.isArray(progressStore.progress[question.id]) && progressStore.progress[question.id].length < 6) {
            return QuestionStatuses.IN_PROGRESS;
        }

        return QuestionStatuses.DONE;
    }

    return QuestionStatuses.LOCKED;
}

function getOpenedAnswers(question) {
    const progressStore = useProgressStore()
    if (!progressStore.progress.hasOwnProperty(question.id) || !Array.isArray(progressStore.progress[question.id])) {
        return [];
    }

    return progressStore.progress[question.id];
}

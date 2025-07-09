import {useProgressStore} from "@/stores/progress";
import {Question} from "@/misc/interfaces";
import {faCheck, faEllipsis, faLock, faQuestion} from "@fortawesome/free-solid-svg-icons";

export enum QuestionStatuses {
    'LOCKED',
    'IN_PROGRESS',
    'DONE'
}

export function QuestionMapper(question: Question, index: number) {
    question.min_answers = index * 4;
    question.status = getQuestionProgressStatus(question);
    question.opened = getOpenedAnswers(question);
    question.icon = getIcon(question);
    return question;
}

function getQuestionProgressStatus(question: Question) {
    const progressStore = useProgressStore()

    if (progressStore.totalAnswers < question.min_answers) {
        return QuestionStatuses.LOCKED;
    }

    if (progressStore.progress.hasOwnProperty(question.id) && Array.isArray(progressStore.progress[question.id]) && progressStore.progress[question.id].length === 5) {
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

function getIcon(question: Question) {
    switch (question.status) {
        case QuestionStatuses.LOCKED:
            return faLock
        case QuestionStatuses.IN_PROGRESS:
            return faEllipsis
        case QuestionStatuses.DONE:
            return faCheck
    }
    return faQuestion
}

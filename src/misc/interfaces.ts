import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface Theme {
    id: number,
    title: string,
    icon: IconDefinition,
    progress: number,
    color: string
}

export interface Question {
    id: number,
    title: string,
    status: number,
    min_answers: number,
    opened: number[],
    icon: IconDefinition,
    answers: Answer[]
}

export interface Answer {
    id: number,
    text: string,
    percentage: string,
    synonyms: string[]
}

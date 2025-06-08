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
    answers: Answer[]
}

export interface Answer {
    id: number,
    text: string,
    percent: string,
    synonyms: string[]
}

import {defineStore} from 'pinia';

export const useProgressStore = defineStore('progress', {
    state() {
        return {
            progress: {},
            totalAnswers: 9,
        };
    },
    // getters: {
    //     totalAnswers(state) {
    //         return Object.values(state.progress)
    //             .map(item => item.length)
    //             .reduce((a, b) => a + b, 0);
    //     }
    // },
    // actions: {
    //     add(questionId, answerNumber) {
    //         if (questionId in this.progress) {
    //             this.progress[questionId].push(answerNumber)
    //         } else {
    //             this.progress[questionId] = [answerNumber];
    //         }
    //     },
    //     create(questionId) {
    //         if (questionId in this.progress) {
    //             return;
    //         }
    //
    //         this.progress[questionId] = [];
    //     }
    // },
    persist: {
        enabled: true,
        // See below for additional options that go here
    },
});

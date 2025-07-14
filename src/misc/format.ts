export default {

    levelIndex(i: number): string {
        return String(i + 1).padStart(3, '0');
    },

    cluedAnswer(str: string) {
        return Array.from(str)[0] + '_'.repeat(str.length - 1);
    }

}

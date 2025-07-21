export default {

    levelIndex(i: number): string {
        return String(i + 1).padStart(3, '0');
    },

    cluedAnswer(str: string) {
        const splitBySpace = str.split(/(?<=^\S+)\s/);
        if (splitBySpace.length === 1) {
            return Array.from(splitBySpace[0])[0] + splitBySpace[0].replace(/\S/g, "_").substring(1);
        } else {
            return splitBySpace[0] + ' ' + Array.from(splitBySpace[1])[0] + splitBySpace[1].replace(/\S/g, "_").substring(1);
        }
    }

}

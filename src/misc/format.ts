export default {

    levelIndex(i: number): string {
        return String(i + 1).padStart(3, '0');
    }

}

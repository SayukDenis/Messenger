export function shuffleArray(users: any[]) {
    for (let i = users.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [users[i], users[j]] = [users[j], users[i]];
    }
}
export function getRandomNumber(max: number, min = 0): number {
    const randomDecimal = Math.random();
    // Scale the random decimal to the desired range [0, max)
    const randomNumber = Math.floor(randomDecimal * max) + min;
    return randomNumber;
}
export function getRandomElementsFromArray<T>(arr: T[], max = arr.length): T[] {
    if (arr.length == 1)
        return arr;
    const randomCount = getRandomNumber(max > arr.length ? arr.length : max, 1); // Random quantity (min 1)
    const shuffledArray = arr.slice().sort(() => Math.random() - 0.5); // Sort copy of the array
    return shuffledArray.slice(0, randomCount);
}
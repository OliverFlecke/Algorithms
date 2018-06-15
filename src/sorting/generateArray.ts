/**
 * Generate an array of any size
 * @param count The length of the array. Defult value is 10
 * @returns An array of random numbers between 0 and `count`
 */
export default function generateArray(count: number = 10): number[] {
    const array = new Array(count);
    const generateNumber = () => Math.floor(Math.random() * count);

    for (let i = 0; i < count; i++) {
        array[i] = generateNumber();
    }

    return array;
}

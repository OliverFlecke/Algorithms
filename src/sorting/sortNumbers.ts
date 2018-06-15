/**
 * Sort numbers using the build in sort function in JavaScript
 * @param array The array to be sorted.
 * @returns The sorted array
 */
function sortNumbers(array: number[]): number[] {
    return array.sort((x, y) => x - y);
}

export { sortNumbers };

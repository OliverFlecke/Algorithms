/**
 * Bubble sort. Time complexity O(n^2)
 *
 * @param array The array to be sorted
 */
export function bubbleSort(array: any[]) {
    const swap = (x: number, y: number) => {
        const temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    };

    let n = array.length;

    do {
        let newN = 0;
        for (let i = 1; i < n; i++) {
            if (array[i - 1] > array[i]) {
                swap(i - 1, i);
                newN = i;
            }
        }
        n = newN;
    } while (n > 0);
}

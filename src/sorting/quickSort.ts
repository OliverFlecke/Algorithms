/**
 * Quick sort algorithm. Time complexity: O(n lg n) on average, O(n^2) in worst case
 *
 * First choose a pivot element. Then partition the array into two sub-arrays,
 * the left containing all the elements that are less than the pivot
 * and the right containing all elements that are greater than or equal.
 * Recursively sort these two arrays.
 * @param array The array to be sorted
 */
function quickSort(array: any[], low = 0, high = array.length - 1) {
    if (low < high) {
        const pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
}

function partition(array: any[], low: number, high: number): number {
    const swap = (x: number, y: number) => {
        const temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    };

    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(i, j);
        }
    }
    swap(i + 1, high);

    return i + 1;
}

export { quickSort };

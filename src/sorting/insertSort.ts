/**
 * Insert sort. Time complexity O(n^2).
 * The object will be copied as not to modify the existing array object
 * @param list List to be sorted
 * @returns The sorted list
 */
function insertSort(list: any[]): any[] {
    const A = list.slice();

    let i = 0;
    while (i < A.length) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] >= x) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = x;
        i++;
    }

    return A;
}

/**
 * Recursive insertion sort. Complexity O(n^2)
 * @param list The list to be sorted. NOTE that the array object will be modified
 */
function insertSortRecursive(list: any[]) {
    insertSortR(list, list.length - 1);
}

function insertSortR(list: any[], n: number) {
    if (n > 0) {
        insertSortR(list, n - 1);
        const x = list[n];
        let j = n - 1;
        while (j >= 0 && list[j] > x) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = x;
    }
}

/**
 * Sort numbers using the build in sort function in JavaScript
 * @param array The array to be sorted.
 * @returns The sorted array
 */
function sortNumbers(array: number[]): number[] {
    return array.sort((x, y) => x - y);
}

export { insertSort, insertSortRecursive, sortNumbers };

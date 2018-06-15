/**
 * Sorting an array using merge sort.
 *
 * Merge sort is a classic example of a Divide and Conquer algorithm.
 * It works by dividing the array into two halves, sort each recursively
 * with merge sort, and then merge these sorted arrays.
 *
 * Time Complexity: O(n lg n)
 *
 * @param array The array to be sorted
 */
function mergeSort(array: any[], left = 0, right = array.length - 1) {
    if (right > left) {
        const middle = Math.floor((left + right) / 2);
        mergeSort(array, left, middle);
        mergeSort(array, middle + 1, right);
        merge(array, left, middle, right);
    }
}

function merge(array: any[], left: number, middle: number, right: number) {
    let i = 0;
    let j = 0;

    const leftSize = middle - left + 1;
    const rightSize = right - middle;

    // Copy the data into temporay arrays
    const L = new Array(leftSize);
    const R = new Array(rightSize);

    for (i = 0; i < leftSize; i++) {
        L[i] = array[left + i];
    }
    for (j = 0; j < rightSize; j++) {
        R[j] = array[middle + 1 + j];
    }

    // Merge the temporay arrays L and R back into the array
    i = 0;
    j = 0;
    let k = left;
    while (i < leftSize && j < rightSize) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        } else {
            array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements
    while (i < leftSize) {
        array[k] = L[i];
        i++;
        k++;
    }

    while (j < rightSize) {
        array[k] = R[j];
        j++;
        k++;
    }
}

/**
 * Merge sorting in more classic JavaScript syntax
 * @param
 */
function jsMergeSort(array: any[]) {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left   = array.slice(0, middle);
    const right  = array.slice(middle);

    return jsMerge(jsMergeSort(left), jsMergeSort(right));
}

function jsMerge(left: any[], right: any[]) {
    const sorted = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            sorted.push(left[il++]);
        } else {
            sorted.push(right[ir++]);
        }
    }

    return sorted.concat(left.slice(il)).concat(right.slice(ir));
}

export { mergeSort, jsMergeSort};

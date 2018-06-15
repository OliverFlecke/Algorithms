import generateArray from './generateArray';
import {
    insertSort,
    insertSortRecursive,
} from './insertSort';
import { sortNumbers } from './sortNumbers';

describe('Test insert sort', () => {
    test('Sort empty list', () => {
        expect(insertSort([])).toEqual([]);
    });

    test('Sorting array of length 20', () => {
        const list =  [ 8, 1, 7, 6, 1, 0, 14, 6, 14, 11, 13, 14, 10, 2, 9, 12, 15, 18, 2, 5 ];
        const result = sortNumbers(list.slice());
        expect(insertSort(list)).toEqual(result);
    });

    test('Sorting longer arrays', () => {
        const array = generateArray(100);

        const result = sortNumbers(array.slice());
        const sortedArray = insertSort(array);

        expect(sortedArray).toEqual(result);
    });
});

describe('Test recursive insertion sorting', () => {
    test('sort empty list', () => {
        const list: any[] = [];
        insertSortRecursive(list);
        expect(list).toEqual([]);
    });

    test('Sorting [3,2,1]', () => {
        const list = [3, 2, 1];
        insertSortRecursive(list);

        expect(list).toEqual([1, 2, 3]);
    });

    test('Sorting longer arrays', () => {
        const array = generateArray(100);
        const result = sortNumbers(array.slice());
        insertSortRecursive(array);

        expect(array).toEqual(result);
    });
});

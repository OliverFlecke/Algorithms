import generateArray from './generateArray';
import {
    jsMergeSort,
    mergeSort,
} from './mergeSort';
import { sortNumbers } from './sortNumbers';

describe('Testing merge sort with', () => {
    test.each([
        [[], []],
        [[2, 1], [1, 2]],
        [[3, 2, 1], [1, 2, 3]]])
    ('[%s] which should match [%s]',
        (list: number[], expected: number[]) => {
            mergeSort(list);
            expect(list).toEqual(expected);
    });

    test.each([[20], [50], [100], [1000], [10000], [100000]])
        ('generated arrays', (size: number) => {
            const list = generateArray(size);
            const expected = sortNumbers(list);
            mergeSort(list);

            expect(list).toEqual(expected);
        });
});

describe('Testing merge sorting using classic js syntax', () => {
    test.each([
        [[], []],
        [[2, 1], [1, 2]],
        [[3, 2, 1], [1, 2, 3]]])
    ('[%s] which should match [%s]',
        (list: number[], expected: number[]) => {
            const sorted = jsMergeSort(list);
            expect(sorted).toEqual(expected);
    });

    test.each([[20], [50], [100], [1000], [10000], [100000]])
        ('generated arrays', (size: number) => {
            const list = generateArray(size);
            const expected = sortNumbers(list);
            const sorted = jsMergeSort(list);

            expect(sorted).toEqual(expected);
        });
});

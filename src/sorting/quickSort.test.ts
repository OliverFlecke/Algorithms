import generateArray from './generateArray';
import {
    quickSort,
} from './quickSort';
import { sortNumbers } from './sortNumbers';

describe('Testing merge sort with', () => {
    test.each([
        [[], []],
        [[2, 1], [1, 2]],
        [[3, 2, 1], [1, 2, 3]]])
    ('[%s] which should match [%s]',
        (list: number[], expected: number[]) => {
            quickSort(list);
            expect(list).toEqual(expected);
    });

    test.each([[20], [50], [100], [1000], [10000], [10000]])
        ('generated arrays', (size: number) => {
            const list = generateArray(size);
            const expected = sortNumbers(list);
            quickSort(list);

            expect(list).toEqual(expected);
        });
});

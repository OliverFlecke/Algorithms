import { flatten } from './flatten';

describe('Test for flatting arrays', () => {
    test('[1, [2, [3]]] to flatten', () => {
        expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
    });

    test('Many levels of nesting', () => {
        const array = [[[1, 1], [1, 1]], [[1, 1], [1, 1]]];
        expect(flatten(array)).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
    });

    test('Different levels of nesting', () => {
        expect(flatten([1, [2], [[3]]])).toEqual([1, 2, 3]);
    });
});

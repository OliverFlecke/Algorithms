import generateArray from './generateArray';

describe('Generating array', () => {
    test('of default length (10)', () => {
        const array = generateArray(10);
        expect(array.length).toEqual(10);
        expect(array.every(x => typeof x === 'number')).toBeTruthy();
    });

    test('of length 0', () => {
        const array = generateArray(0);
        expect(array.length).toEqual(0);
    });

    test.each([100, 200, 1000, 10000])('of different lengths', (length: number) => {
        const array = generateArray(length);
        expect(array.length).toEqual(length);

        expect(array.every(x => typeof x === 'number')).toBeTruthy();
    });
});

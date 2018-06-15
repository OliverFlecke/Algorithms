import { contains, fibonacci, isZero } from './complexity';

function generateArray(l: number): number[] {
    return Array.apply(null, {length: l}).map(Number.call, Number);
}

describe('Test isZero', () => {
    test('Test if 0 isZero', () => {
        expect(isZero(0)).toBeTruthy();
    });
    test('Test if 1 isZero is false', () => {
        expect(isZero(1)).toBeFalsy();
    });
});

describe('Test for contains', () => {
    test('5 is in [0..9]', () => {
        const list = generateArray(10);
        expect(contains(list, 5)).toBeTruthy();
    });
    test('10 is not in [0,9]', () => {
        const list = generateArray(10);
        expect(contains(list, 10)).toBeFalsy();
    });
});

describe('Test fibonacci number generation', () => {
    test('The 0th fibonacci number should be 0', () => {
        expect(fibonacci(0)).toBe(0);
    });
    test('The 1st fibonacci number should be 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
    test('The 2nd fibonacci number should be 1', () => {
        expect(fibonacci(2)).toBe(1);
    });
    test('The 3rd fibonacci number should be 3', () => {
        expect(fibonacci(3)).toBe(2);
    });
    test('The 4th fibonacci number should be 3', () => {
        expect(fibonacci(4)).toBe(3);
    });
    test('The 5th fibonacci number should be 5', () => {
        expect(fibonacci(5)).toBe(5);
    });
    test('The 6th fibonacci number should be 8', () => {
        expect(fibonacci(6)).toBe(8);
    });
    test('The 12th fibonacci number should be 144', () => {
        expect(fibonacci(12)).toBe(144);
    });
});

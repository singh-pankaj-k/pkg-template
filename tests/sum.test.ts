import { sum } from '../src';

describe('sum', () => {
    it('adds numbers correctly', () => {
        expect(sum(2, 3)).toBe(5);
    });
});

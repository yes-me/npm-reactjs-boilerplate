import double from './index';

describe('double the number', () => {
    it ('should return double of number of 4', () => {
        const res = double(4);
        expect(res).toBe(16);
    });

    it ('should return Not a number if it is not a number', () => {
        const res = double('a');
        expect(res).toBe('Not a number');
    });
});
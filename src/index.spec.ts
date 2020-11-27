import { toRoman } from './index';
import { expect } from 'chai';

describe('Convert to roman', () => {
    it('one should be one', () => {
        expect(toRoman(1)).eql("I");
        expect(toRoman(2)).eql("II");
        expect(toRoman(3)).eql("III");
    });
});

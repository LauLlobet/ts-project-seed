import { toRoman } from './index';
import { expect } from 'chai';

describe('Convert to roman', () => {
    it('one should be one', () => {
        expect(toRoman(1)).eql("I");
    });
});

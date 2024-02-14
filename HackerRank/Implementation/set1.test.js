import {getMoneySpent} from './set1'

describe('Get Money Spent', () => {
    it('returns -1 if its not possible to buy both items', () => {
        expect(getMoneySpent([4], [5], 5)).toBe(-1)
    })
    it('returns the maximum that can be spent', () => {
        expect(getMoneySpent([3,1], [5,2,8], 10)).toBe(9)
    })
    it('returns the budget if theres a perfect match', () => {
        expect(getMoneySpent([40,30,50],[90,190,50], 100)).toBe(100)
    })
})
describe('2 cats and one mouse', () => {
    it('returns Cat B', () => {
        expect(catAndMouse).toBe('Cat B')
    })
})
import {getMoneySpent, catAndMouse, sameFrequency, pickingNumbers} from './set1'

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
    it('Returns the cat that catches the mouse first', () => {
        expect(catAndMouse(2,5,4)).toBe('Cat B')
    })
    it('returns Mouse C if both cats land at the same time', () => {
        expect(catAndMouse(1,3,2)).toBe('Mouse C')
    })
})

describe('Same frequency', () => {
    it('returns false if the numbers are different length', () => {
        expect(sameFrequency(22, 222)).toBe(false)
    })
    it('returns true if 2 numbers are same frequency (contain exact same digits different order ok)', () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true)
    })
    it('returns false if the numbers are not the same frequency', () => {
        expect(sameFrequency(34,14)).toBe(false)
    })
})

describe('Picking Numbers', () => {
    // it('returns a frequency counter object from an array', () => {
    //     expect(pickingNumbers([4,5,6,3,3,1])).toStrictEqual({'4':1, '5':1, '6':1, '3':2, '1':1})
    // })
    it('returns the longest subarray of integers that all have a difference of 0 or 1 ', () => {
        expect(pickingNumbers([4,5,6,3,3,1])).toBe(3)
        expect(pickingNumbers([98,3,99,1,97,2])).toBe(2)

    })
})
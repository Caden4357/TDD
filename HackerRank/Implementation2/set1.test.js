import { designerPDFViewer, utopiaTreeGrowth, angryProfessor, beautifulDays } from "./set1";
describe('Hello', () => {
    // it('returns the height of the tallest letter in the string', () => {
    //     expect(designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')).toBe(3);
    // })
    it('returns the area of the rectangle highlight in mm^2',  () => {
        expect(designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')).toBe(9);
    })
});

describe('Utopia tree growth', () => {
    it('returns the growth of the tree after n cycles each spring (odd numbers) it doubles in height. Each summer (even numbers) it increases by 1', () => {
        expect(utopiaTreeGrowth(5)).toBe(14)
        expect(utopiaTreeGrowth(4)).toBe(7)
        expect(utopiaTreeGrowth(0)).toBe(1)

    })
})
describe('Angry Professor', () => {
    it('returns YES when there as many or more positive numbers in the array as k', () => {
        expect(angryProfessor(3,[-2,-1,0,1,2])).toBe('NO')
        expect(angryProfessor(2,[0,-1,2,1])).toBe('NO')
        expect(angryProfessor(4,[-93, -86, 49, -62, -90, -63, 40, 72, 11, 67])).toBe('NO')
    })
})
describe('Beautiful Days', () => {
    it('returns the number of beautiful days in the range', () => {
        expect(beautifulDays(20, 23, 6)).toBe(2)
    })
})
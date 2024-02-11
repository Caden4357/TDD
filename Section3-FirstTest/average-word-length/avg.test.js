// given a sentence determine the average length of the words in that sentence 
import { avgWordLength } from "./avg"
describe('average word length', () => {
    it('returns 0 when the string is empty', () => {
        expect(avgWordLength('')).toBe(0)
    })
    it('returns the length of word if only 1 word is given', () => {
        expect(avgWordLength('ads')).toBe(3)
    })
    it('returns the average word length when more than 1 word is given rounded up', () => {
        expect(avgWordLength('The cow jumped over the moon')).toBe(4)
    })
})
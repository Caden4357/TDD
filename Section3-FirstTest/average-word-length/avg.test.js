// given a sentence determine the average length of the words in that sentence 
import { avgWordLength } from "./avg"
describe('average word length', () => {
    it('returns 0 when the string is empty', () => {
        expect(avgWordLength('')).toBe(0)
    })
})
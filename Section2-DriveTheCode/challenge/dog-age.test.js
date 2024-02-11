// Problem:
//   Write a function that takes a dog's age in human years and returns the equivalent age in dog years.
// dogs age * 7 = human years
import {dogAge} from './dog-age'
// describe('dogAge', function () {
//     it('returns the equivalent age in dog years', function () {
//         expect(dogAge(1)).toBe(7);
//         expect(dogAge(2)).toBe(14)
//         expect(dogAge(3)).toBe(21)
//         expect(dogAge(0)).toBe(0)
//         expect(dogAge()).toBe(0)
//     });
// });

// * Better way of writing it 
describe('dogAge', function () {

    it('returns 0 when no age is provided', () => {
        expect(dogAge()).toBe(0)
    })

    it('returns 0 when the dogs age is 0',() => {
        expect(dogAge(0)).toBe(0)
    });

    it('returns 7 when dogs age is 1', () => {
        expect(dogAge(1)).toBe(7)
    })

    it('returns dogs age times 7 when age is greater than 1', () => {
        expect(dogAge(2)).toBe(14)
        expect(dogAge(3)).toBe(21)
    })
});
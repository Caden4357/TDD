import {hello} from './hello';
// describe is a function that takes two arguments: a string and a function.
// The string is the name of the test, and the function is the test itself.
// The function can contain one or more tests.
// Each test is an 'it' function that takes two arguments: a string and a function.
// The string is the name of the test, and the function is the test itself.
// The function contains one or more assertions that test the code.

describe('Hello', () => {
    it('returns default greeting without given name', () => {
        expect(hello()).toBe('Hello, world!');
    });
    it('returns greeting with given name', () => {
        expect(hello('Caden')).toBe('Hello, Caden!');
    });
});

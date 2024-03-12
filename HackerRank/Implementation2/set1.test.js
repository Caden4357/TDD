import { designerPDFViewer } from "./set1";
describe('Hello', () => {
    // it('returns the height of the tallest letter in the string', () => {
    //     expect(designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')).toBe(3);
    // })
    it('returns the area of the rectangle highlight in mm^2',  () => {
        expect(designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')).toBe(9);
    })
});

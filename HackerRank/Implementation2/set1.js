export function designerPDFViewer(h, word) {
    const alphabet = {};
    let tallest = 0;
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        alphabet[letter] = i;
    }
    for (let char of word) {
        let heightOfChar = h[alphabet[char]];
        tallest = Math.max(tallest, heightOfChar);
    }
    return tallest * word.length;
}
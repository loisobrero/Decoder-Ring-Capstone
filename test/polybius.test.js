const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// should match letter to number pair
describe("polybius", () => {
    it("should encode a message by translating each letter to it's respective number pairs", () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    })
// leave spaces
    it("should leave spaces as is", () => {
        const actual = polybius("Hello world")
        const expected = '3251131343 2543241341';
        expect(actual).to.eql(expected);
    })
// even is true, odd is false
    it("should return false if the length of all numbers is odd", () => {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(actual).to.equal(expected);
    })
// decode 42 to both 'i' and 'j'
    it("should translate 42 to both 'i' and 'j' when decoding", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    })
// translate i/j to 42
    it("should translate i and j to 42 when encoding", () => {
        const actual = polybius("jinx")
        const expected = "42423335";
        expect(actual).to.eql(expected);
    })
// ignore capital letters
    it("should ignore capital letters", () => {
        const actual = polybius("Hello wOrLd");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    })
})

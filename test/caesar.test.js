// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe("caesar", () => {

it("should return the decoded message according to the shift value", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected);
});

it("should return the encoded message according to the shift value'", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
});

it("should leave spaces as is", () => {
    const actual = caesar("abc !", 8);
    const expected = " "
    expect(actual.charAt(3)).to.equal(expected);
});

it("should leave special characters as is", () => {
    const actual = caesar("abc !", 8);
    const expected = "!"
    expect(actual.charAt(4)).to.equal(expected);
});

/*It should handle shifts that pass 'z' and wraps around the front of the alphabet */
it("should handle shifts past the end of the alphabet", () => {
    const actual = caesar("Hello", 3);
    const expected = "khoor";
    expect(actual).to.eql(expected);
});

/* It ignores captial letters */
it("should ignore capitalization of letters", () => {
    const actual = caesar("Hello", 2);
    const expected = "jgnnq";
    expect(actual).to.eql(expected);
});

/*It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present. */
it("should return false if the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
});

it("should return false if the shift value is greater than 25", () => {
    const actual = caesar("thinkful", 99);
    expect(actual).to.be.false;
});

it("should return false if the shift value is less than -25", () => {
    const actual = caesar("thinkful", -26)
    expect(actual).to.be.false;
});

it("should return false if the shift value is 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
});

})
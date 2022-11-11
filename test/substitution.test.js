const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substituion", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });

    it("should encode a given phrase", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.eql(expected);
    });

    it("should return false if there are any duplicate letters in the alphabet", () => {
        const actual = substitution("thinnkful", "shhorrt");
        expect(actual).to.be.false;
    });

    it("should maintain spaces before and after encoding the message", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected); 
    });

    it("should ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected); 
    });
})
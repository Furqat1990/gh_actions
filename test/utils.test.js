const upper = require('../utils/toUpper');

describe("Utils", () => {
    test("Test to UpperCase", () => {
        expect("SALoM").toEqual(upper("salom"));
    });
});
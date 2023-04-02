const upper = require('../utils/toUpper');

describe("Utils", () => {
    test("Test to UpperCase", () => {
        expect("SALOM").toEqual(upper("salom"));
    });
});
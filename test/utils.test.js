const upper = require('../utils/toUpper');

describe("Utils", () => {
    test("Test to UpperCase", () => {
        expect("BOSHLA").toEqual(upper("boshla"));
    });
});
const upper = require('../utils/toUpper');

describe("Utils", () => {
    test("Test to UpperCase", () => {
        expect("SOLYUT").toEqual(upper("solyut"));
    });
});
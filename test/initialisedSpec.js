"use strict";

describe("Library is available", function () {
    var pullAnalyser = require('../src/pull-analyser');

    it("should have correct version", function () {
        expect(pullAnalyser.VERSION).toBe('0.1.0');
    });
});

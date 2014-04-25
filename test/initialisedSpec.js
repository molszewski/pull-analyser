describe("Library is available", function () {
    var pull_analyser = require('../src/pull-analyser');

    it("should have version", function () {
        expect(pull_analyser.VERSION).toBe('0.1.0');
    });
});

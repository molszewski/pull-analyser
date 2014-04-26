describe("Library is available", function () {
    var pullAnalyser = require('../src/pull-analyser');

    it("should have version", function () {
        expect(pullAnalyser.VERSION).toBe('0.1.0');
    });
});

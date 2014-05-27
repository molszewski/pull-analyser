"use strict";

describe("Closed pull requests are analysed", function () {
    var pullAnalyser = require('../src/pull-analyser');

    it("should return mapping between closing date and number of pull requests", function () {
        var result = pullAnalyser.analyseClosed([
            {
                "closed_at": "2014-04-11T06:33:38Z"
            }
        ]);

        expect(result).toEqual({
            "2014-04-11": 1
        });
    });

    it("should return no mapping when pull requests are empty", function () {
        var result = pullAnalyser.analyseClosed([]);

        expect(result).toEqual({});
    });

    it("should filter not closed pull requests", function () {
        var result = pullAnalyser.analyseClosed([{
            "closed_at": null
        }]);

        expect(result).toEqual({});
    });

    it("should filter not valid pull requests", function () {
        var result = pullAnalyser.analyseClosed([{
            "closed_on": "2013-04-13"
        }]);

        expect(result).toEqual({});
    });

    it("should filter undefined pull requests", function () {
        var result = pullAnalyser.analyseClosed(undefined);

        expect(result).toEqual({});
    });

    it("should filter non-list pull requests", function () {
        var result = pullAnalyser.analyseClosed({
            "closed_at": "2014-04-11"
        });

        expect(result).toEqual({});
    });
});

"use strict";

describe("Merged pull requests are analysed", function () {
    var pullAnalyser = require('../src/pull-analyser');

    it("should return mapping between merging date and number of pull requests", function () {
        var result = pullAnalyser.analyseMerged([
            {
                "merged_at": "2014-04-11T06:33:38Z"
            }
        ]);

        expect(result).toEqual({
            "2014-04-11": 1
        });
    });

    it("should return no mapping when pull requests are empty", function () {
        var result = pullAnalyser.analyseMerged([]);

        expect(result).toEqual({});
    });

    it("should filter not merged pull requests", function () {
        var result = pullAnalyser.analyseMerged([{
            "closed_at": null
        }]);

        expect(result).toEqual({});
    });

    it("should filter not valid pull requests", function () {
        var result = pullAnalyser.analyseMerged([{
            "merged_on": "2013-04-13"
        }]);

        expect(result).toEqual({});
    });
});

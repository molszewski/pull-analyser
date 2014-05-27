//     pull-analyser.js 0.1.0
//     (c) 2014 Michal Olszewski
//     pull-analyser may be freely distributed under the MIT license.
"use strict";

(function (undefined) {
    var VERSION = '0.1.0';
    var _ = require('underscore');

    var pullAnalyser = function() {
        // empty for now
    };
    pullAnalyser.VERSION = VERSION;

    var extractDate = function(pullRequestDate) {
        return pullRequestDate.substring(0, 10);
    };

    pullAnalyser.analyseClosed = function(pullRequests) {

        var mapping = _.chain(pullRequests)
            .pluck('closed_at')
            .filter(function(closedAt) {
                return _.isString(closedAt);
            })
            .map(function(closedAt) {
                return extractDate(closedAt);
            })
            .reduce(function(memo, date) {
                if (!_.isNumber(memo[date])) {
                    memo[date] = 0;
                }
                memo[date] += 1;

                return memo;
            }, {})
            .value();

        return mapping;
    };

    // NodeJS
    module.exports = pullAnalyser;
}());

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

    var createDateHistogram = function(pullRequests, dateTimePropertyName) {
        return _.chain(pullRequests)
            .pluck(dateTimePropertyName)
            .filter(function(dateTimeProperty) {
                return _.isString(dateTimeProperty);
            })
            .map(function(dateTimeProperty) {
                return extractDate(dateTimeProperty);
            })
            .reduce(function(memo, date) {
                if (!_.isNumber(memo[date])) {
                    memo[date] = 0;
                }
                memo[date] += 1;

                return memo;
            }, {})
            .value();
    };

    pullAnalyser.analyseClosed = function(pullRequests) {
        return createDateHistogram(pullRequests, 'closed_at');
    };

    pullAnalyser.analyseMerged = function(pullRequests) {
        return createDateHistogram(pullRequests, 'merged_at');
    };

    // NodeJS
    module.exports = pullAnalyser;
}());

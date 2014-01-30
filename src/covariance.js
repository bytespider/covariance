var average = require('average');

module.exports = function covariance(a, b) {
    'use strict';

    var length = a.length;
    var i = 0;

    var mean_a = average(a);
    var mean_b = average(b);
    var values = [];

    for ( ; i < length; i += 1) {
        var diff_a = a[i] - mean_a;
        var diff_b = b[i] - mean_b;
        values.push(diff_a * diff_b);
    }

    return average(values);
};
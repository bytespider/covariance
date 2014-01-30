var covariance = require('../');
var test = require('tap').test;

test('covariance', function (t) {
    t.plan(1);

    var a = [1, 3, 2, 5, 8, 7, 12, 2, 4];
    var b = [8, 6, 9, 4, 3, 3,  2, 7, 7];

    var result = covariance(a, b);
    t.equal(result, -7.172839506172839);
});
const test = require('tape');
const calculateChange = require('../lib/changeCalculator.js');

test('calculateChange(215, 300) should return [50, 20, 10, 5]', function(t) {
    const result = calculateChange(215, 300);
    const expected = [50, 20, 10, 5];
    t.deepEqual(result, expected);
    t.end();
});

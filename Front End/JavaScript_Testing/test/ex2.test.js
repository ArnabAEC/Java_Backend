const ex2 = require('../example2');
const assert = require('chai').assert;

it('Example2 add should return above 10', () => {
    assert.isAbove(ex2.add(6,6), 10);
});

it('Example2 add shoyld return a number', () =>{
    assert.typeOf(ex2.add(), 'number');
});
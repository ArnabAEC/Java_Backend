
const Person = require('../person').Person;
const assert = require('chai').assert;

let pers = new Person("Jack", 22);

describe('Person', () => {
    it('Person name should be Jack', () => {
        assert.equal(pers.getName(), 'Jack');
    });

    it('Person should be above 21', () => {
        assert.isAbove(pers.getAge(), 21);
    });
    it('Person should be of type Object', () =>{
        assert.typeOf(pers, 'object');
    })
})
 
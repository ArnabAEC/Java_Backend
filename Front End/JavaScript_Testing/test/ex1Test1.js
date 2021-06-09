const ex1 = require('../example1');
const assert = require('chai').assert;
describe('Module Example1', ()=>{
    describe('Hello' , () => {
        it('Example1 sayHello should return hello javaScript', ()=>{
            assert.equal(ex1.sayHello(), "hello javaScript");
        });
    
        it('Example1 sayHello should return type string', () =>{
            assert.typeOf(ex1.sayHello(), 'string');
        });
    
    });
    describe('Bye' , () => {
        it('Example1 sayBye should return hello javaScript', ()=>{
            assert.equal(ex1.sayBye(), "GoodBye");
        });
    
        it('Example1 sayBye should return type string', () =>{
            assert.typeOf(ex1.sayBye(), 'string');
        });
    
    });
});



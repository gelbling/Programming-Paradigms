// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW3, Q2.1

// import the maxConsecutiveOnes function
const source = require('./maxConsecutiveOnes')

// import the assert method
var assert = require('assert');


// test failed input [1,0,1,1,0,1,1,1]
describe('maxConsecutiveOnes', function () {
    it('[1,0,1,1,0,1,1,1] --> should return 3 but fails and returns 2', function () {
      assert.equal(source.maxConsecutiveOnes([1,0,1,1,0,1,1,1]), 3);
    });
});

// test failed input [0,1,0,1,1]
describe('maxConsecutiveOnes', function () {
    it('[0,1,0,1,1] --> should return 2 but fails and returns 1', function () {
      assert.equal(source.maxConsecutiveOnes([0,1,0,1,1]), 2);
    });
});

// test failed input [1,0,1,1]
describe('maxConsecutiveOnes', function () {
  it('[1,0,1,1] --> should return 2 but fails and returns 1', function () {
    assert.equal(source.maxConsecutiveOnes([1,0,1,1]), 2);
  });
});
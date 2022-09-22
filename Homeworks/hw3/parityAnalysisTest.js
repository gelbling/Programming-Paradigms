// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW3, Q1.3

// import the parityAnalysis function
const source = require('./parityAnalysis')

// import the assert method
var assert = require('assert');


// test if an input of 0 outputs true
describe('parityAnalysis', function () {
    it('should return true for an input of 0', function () {
      assert.equal(source.parityAnalysis(0), true);
    });
});

// test if an input of 1 outputs true
describe('parityAnalysis', function () {
    it('should return true for an input of 1', function () {
      assert.equal(source.parityAnalysis(1), true);
    });
});

// test if an input of 12 outputs false
describe('parityAnalysis', function () {
    it('should return false for an input of 12', function () {
      assert.equal(source.parityAnalysis(12), false);
    });
});

// test if an input of 12345 outputs true
describe('parityAnalysis', function () {
    it('should return true for an input of 12345', function () {
      assert.equal(source.parityAnalysis(12345), true);
    });
});

// test if an input of 312 outputs true
describe('parityAnalysis', function () {
    it('should return true for an input of 312', function () {
      assert.equal(source.parityAnalysis(312), true);
    });
});
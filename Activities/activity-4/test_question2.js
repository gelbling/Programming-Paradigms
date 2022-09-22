// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity 4, Q1

var assert = require('assert');
var max_ones = require('./hw1_question_2')

describe('findMaxConsecutiveOnes(nums)', funcation() {

  describe('Check Simple List', function() {
    it('should return 0 if there are no consecutive ones', function() {
      assert.equal(max_ones.findMaxConsecutiveOnes([0]), 0);
    });
  });

  describe('Check Complex List', function() {
    it('should return the amount of ones in the list: 4', function() {
      assert.equal(max_ones.findMaxConsecutiveOnes([1,1,0,1,0,1,1,0,1,1,1,1,0,1]), 4);
    });
  });

  describe('Check All Ones List', function() {
    it('should return all the ones in the list: 12', function() {
      assert.equal(max_ones.findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1]), 12);
    });
  });

});



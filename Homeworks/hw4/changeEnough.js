// Generated by CoffeeScript 2.7.0
(function() {
  // Gabriel Amodeo Elbling
  // Prog. Paradigms
  // Activity HW4, Q1
  var changeEnough;

  changeEnough = function(changeInPocket, amount) {
    var totalMoney;
    
    // create total money variable
    // sum all coin amount * coin values read from array
    totalMoney = changeInPocket[0] * 0.25 + changeInPocket[1] * 0.10 + changeInPocket[2] * 0.05 + changeInPocket[3] * 0.01;
    // if the totalMoney is greaterthan or equal to the amount, return true, you can but the item
    // if you can't guy it, return false
    if (totalMoney >= amount) {
      return true;
    } else {
      return false;
    }
  };

  console.log(changeEnough([2, 100, 0, 0], 14.11));

  console.log(changeEnough([0, 0, 20, 5], 0.75));

  console.log(changeEnough([30, 40, 20, 5], 12.55));

  console.log(changeEnough([10, 0, 0, 50], 3.85));

  console.log(changeEnough([1, 0, 5, 219], 19.99));

  // Keep the line below so we can test your code!
  module.exports = {changeEnough};

}).call(this);

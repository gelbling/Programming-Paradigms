// Generated by CoffeeScript 2.7.0
(function() {
  // Gabriel Amodeo Elbling
  // Prog. Paradigms
  // Activity HW4, Q2
  var trackRobot;

  trackRobot = function(north, east, south, west) {
    var xRobot, yRobot;
    xRobot = 0;
    yRobot = 0;
    if (north) {
      yRobot += north;
    }
    if (east) {
      xRobot += east;
    }
    if (south) {
      yRobot -= south;
    }
    if (west) {
      xRobot -= west;
    }
    return [xRobot, yRobot];
  };

  console.log(trackRobot(20, 30, 10, 40));

  console.log(trackRobot());

  console.log(trackRobot(-10, 20, 10));

  module.exports = {trackRobot};

}).call(this);

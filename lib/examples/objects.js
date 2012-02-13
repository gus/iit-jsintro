var sys = require("sys");
var demo = require("../lib/demo");

function Point(x,y) {
  this.x = x;
  this.y = y;
  
  // This will be a private method accessible from public ones
  function pow(val, power) {
    return Math.pow(val, power);
  }
  
  // This will be a public method
  this.toString = function() {
    return "x: " + this.x + ", y: " + this.y;
  }
  
  // As will this
  this.distance = function(otherPoint) {
    return Math.sqrt(pow(otherPoint.x - this.x, 2) + pow(otherPoint.y - this.y, 2))
  }
}

demo.define("literals", function () {
  var point = {x: 1, y: 2};
  sys.puts("x is: " + point.x);
  sys.puts("y is: " + point.y);
});

demo.define("constructors", function () {
  var point = new Point(4, 5);
  sys.puts(point);
});

demo.define("methods", function() {
  var pointA = new Point(4, 5);
  var pointB = new Point(4, 10);
  var distance = pointA.distance(pointB);
  sys.puts("distance between " + pointA + " and " + pointB + " is: " + distance);
});

demo.define("property_iteration", function(){
  var point = new Point(4, 5);
  for (var prop in point) {
    sys.puts("property name is: " + prop.toString());
  }
});

demo.define("value_iteration", function(){
  var point = new Point(4, 5);
  for (var prop in point) {
    var val = point[prop];
    sys.puts("property value is: " + val.toString());
  }
});

demo.run();
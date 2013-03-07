
function Point(x,y) {
  //console.dir(this);
  this.x = x;
  this.y = y;

  // This will be a private method accessible from public ones
  var pow = function (val, power) {
    return Math.pow(val, power);
  };

  // This will be a public method
  this.toString = function() {
    return "x: " + this.x + ", y: " + this.y;
  };

  // As will this
  this.distance = function(otherPoint) {
    return Math.sqrt(pow(otherPoint.x - this.x, 2) + pow(otherPoint.y - this.y, 2));
  };

  // Adn this
  this.equal = function (x) {
    console.log(x === this);
  };
}

define("literals", function () {
  var point = {x: 1, y: 2};
  util.puts("x is: " + point.x);
  util.puts("y is: " + point.y);
});

define("constructors", function () {
  var point = new Point(4, 5);
  util.puts(point);
  util.puts(point.distance(OtherPoint(5,6)));
  point.equal(point);
});

define("methods", function() {
  var pointA = new Point(4, 5);
  var pointB = new Point(4, 10);
  var distance = pointA.distance(pointB);
  util.puts("distance between " + pointA + " and " + pointB + " is: " + distance);
  util.puts("Point A pow [" + pointA.pow(4, 2) + "]");
});

define("property_iteration", function(){
  var point = new Point(4, 5);
  for (var prop in point) {
    util.puts("property name is: " + prop.toString());
  }
});

define("value_iteration", function(){
  var point = new Point(4, 5);
  for (var prop in point) {
    var val = point[prop];
    util.puts("property value is: " + val.toString());
  }
});

define("new_this", function () {
  function F(a) {
    var self = this;
    this.g = a;
    this.equals = function (o) {
      return o == self;
    };
  }
  var f = new F();
  util.puts("Are f and this the same? " + cyan(f.equals(f)));
});

/*
 * This is another way to build an object
 * Pick your poison
 */
function OtherPoint(x, y) {
  function baba() { return "whatever"; }

  function foo(otherP) {
    return 10;
  }

  return {
    "x": x,
    "y": y,
    "toString": baba,
    "distance": foo
  };
}


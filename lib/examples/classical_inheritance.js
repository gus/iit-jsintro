var ck = require("../class");
var rl = require("../../vendor/riot");

Point = ck.Class.create({
  x: 0,
  y: 0,

  initialize: function(x, y) {
    this.x = x;
    this.y = y;
  },

  toString: function() {
    return "x: " + this.x + ", y: " + this.y;
  },

  distance: function(otherPoint) {
    return Math.sqrt(Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2));
  },

  exploder: function() {
    this.callSuper('exploder');
  }
});

Point3D = ck.Class.create(Point, {
  z: 0,

  initialize: function(x, y, z) {
    this.callSuper('initialize', x, y);
    this.z = z;
  },

  toString: function() {
    var stringRep = this.callSuper('toString');
    return stringRep + ", z: " + this.z;
  },

  distance: function(otherPoint) {
    return Math.sqrt(Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2) + Math.pow(otherPoint.z - this.z, 2));
  }
});

define("classical_inheritance", function () {
  rl.Riot.run(function() {
    context('basic 2D Point functionality', function() {
      given('a point', function() {
        var point = null;

        setup(function() {
          point = new Point(4, 5);
        });

        asserts("toString returns a sane representation", function() {
          return point.toString();
        }).equals("x: 4, y: 5");

        asserts("distance returns the distance between the point and another point", function() {
          var otherPoint = new Point(4, 10);
          return point.distance(otherPoint);
        }).equals(5);

        asserts("an exception is raised when a superclass method doesnt exist", function (){
          try {
            point.exploder();
          } catch (e) {
            return e;
          }
          return undefined;
        }).equals("No such method: exploder");

        asserts("calling inspect works", function(){
          return point.inspect();
        }).equals('{"x":4,"y":5}');

      }); // a point
    });   // basic 2D Point functionality

    context('basic 3D Point functionality', function() {
      given('a point', function() {
        var point = null;
        setup(function() {
          point = new Point3D(4, 5, 10);
        });

        asserts("toString returns a sane representation", function() {
          return point.toString();
        }).equals("x: 4, y: 5, z: 10");

        asserts("distance returns the distance between the point and another point", function() {
          var otherPoint = new Point3D(4, 5, 20);
          return point.distance(otherPoint);
        }).equals(10);

        asserts("calling inspect works", function(){
          return point.inspect();
        }).equals('{"x":4,"y":5,"z":10}');
      }); // a point
    });   // basic 3D Point functionality
  });     // Riot.run
});       // define


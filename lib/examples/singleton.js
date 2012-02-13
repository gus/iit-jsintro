var sys = require("sys");
var demo = require("../lib/demo");

// This IS singleton

var SingletonObj = {
  someProperty: 'foo',
  
  methodOne: function() {
    return 'bar';
  }
};
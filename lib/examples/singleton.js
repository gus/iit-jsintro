var rl = require("../../vendor/riot");

// This IS singleton

SingletonObj = {
  someProperty: 'foo',
  
  methodOne: function() {
    return 'bar';
  }
};

define("singleton", function () {
  rl.Riot.run(function() {
    context("inspecting a singleton object", function () {

      asserts('someProperty', function() {
        return SingletonObj.someProperty;
      }).equals("foo");

      asserts('methodOne', function() {
        return SingletonObj.methodOne();
      }).equals("bar");

    }); // context
  });   // Riot.run
});


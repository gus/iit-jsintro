var rl = require("../../vendor/riot");

// This IS a singleton

SingletonObj = {
  someProperty: 'foo',

  methodOne: function() {
    return 'bar';
  }
};

SingletonWithScopedData = (function (shortName) {
  var name = "test " + shortName;
  return {
    instanceName: name,
    toString: function () {
      return "They call me " + name;
    }
  };
}("buddy"));

define("singleton", function () {
  rl.Riot.run(function() {
    context("inspecting a basic singleton object", function () {
      asserts('someProperty', function () {
        return SingletonObj.someProperty;
      }).equals("foo");

      asserts('methodOne', function () {
        return SingletonObj.methodOne();
      }).equals("bar");
    }); // context

    context("inspecting a singleton object with some scoped data", function () {
      asserts('instance name', function () {
        return SingletonWithScopedData.instanceName;
      }).equals("test buddy");

      asserts('toString', function () {
        return SingletonWithScopedData.toString();
      }).equals("They call me test buddy");
    }); // context
  });   // Riot.run
});


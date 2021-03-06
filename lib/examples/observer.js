var rl = require("../../vendor/riot");
var objExt = require("../object_ext");

Observable = {
  addObserver: function (observer) {
    this.observers = this.observers || [];
    this.observers.push(observer);
  },

  notify: function () {
    var len = this.observers.length,
        args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < len; i++) {
      var observer = this.observers[i];
      observer.apply(null, args);
    }
  }
};

define("observers", function () {
  rl.Riot.run(function () {

    context('observing with a function based observer', function () {
      var subject = {
        name: "something observable",
        fire: function () { this.notify(this.name); }
      };
      Object.extend(Observable, subject);

      asserts("the observer function should fire on notify", function () {
        var observedValue = null;
        function observer(name) {
          observedValue = "observed: '" + name + "'";
        }

        subject.addObserver(observer);
        // waiting for something to happen
        subject.fire();

        return observedValue;
      }).equals("observed: 'something observable'");
    });

  });   // Riot.run
});


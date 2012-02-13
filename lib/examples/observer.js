var rl = require("../../vendor/riot");
var objExt = require("../object_ext");

Observable = {
  addObserver: function(observer) {
    this.observers = this.observers || [];
    this.observers.push(observer);
  },
  
  notify: function() {
    var len = this.observers.length;
    var args = Array.prototype.slice.call(arguments);
    for ( var i = 0; i < len; i++) {
      var observer = this.observers[i];
      (typeof observer == "function") ? observer.apply(null, args) : observer.update.apply(observer, args);
    }
  }
};

define("observers", function () {
  rl.Riot.run(function() {

    context('observing with a function based observer', function() {
      var subject = {
        name: "something observable",
        fire: function() { this.notify(this.name); }
      };
      Object.extend(Observable, subject);
      
      asserts("the observer function should fire on notify", function(){
        var observedValue = null;
        // NOTICE
        var observer = function(name) {
          observedValue = "observed: '" + name + "'";
        };
        subject.addObserver(observer);
        subject.fire();
        return observedValue;
      }).equals("observed: 'something observable'");
    });
    
    context('observing with an object based observer', function() {
      var subject = {
        name: "something else observable",
        fire: function() { this.notify(this.name); }
      };
      Object.extend(Observable, subject);
      
      asserts("the observer function should fire on notify", function(){
        // NOTICE
        var observer = {
          update: function(name) { this.observed = "observed: '" + name + "'"}
        };
        subject.addObserver(observer);
        subject.fire();
        return observer.observed
      }).equals("observed: 'something else observable'");
    });

  });   // Riot.run
});


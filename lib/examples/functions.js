var sys = require("sys");
var demo = require("../lib/demo");

demo.define("named", function(){
  function greet() {
    sys.puts("hi folks");
    return true; // use return as in most other languages to return a value
  }
  
  greet();
});

demo.define("unnamed", function(){
  var greet = function () {
    sys.puts("hi again folks");
  }
  
  greet();
});

(function() {
  var greet = function(greeting) {
    sys.puts("hi! " + greeting);
  }
  
  demo.define("calling_standard", function(){
    greet("calling with parentheses");
  });

  demo.define("calling_with_call", function(){
    // ignore the null argument for now
    greet.call(null, "with .call()");
  });

  demo.define("calling_with_apply", function(){
    // ignore the null argument for now
    greet.apply(null, ["with .apply()"]);
  });
})();


demo.define("passing_functions", function(){
  // Functions can be bound to variables and passed in to other functions
  var greeter = function () { 
    sys.puts("welcome"); 
  }
  
  var caller = function(otherFunc) { 
    otherFunc(); 
  }
  caller(greeter);
});

demo.run();
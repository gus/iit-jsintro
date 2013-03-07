
function greet() {
  util.puts(red("We shouldn't ever get here"));
}

define("named", function(){
  function greet() {
    util.puts("hi folks");
    return true; // use return as in most other languages to return a value
  }

  util.puts("greet() returned: " + greet());
});

define("unnamed", function(){
  var greet = function () {
    util.puts("hi again folks");
    // Something is still returned
  };

  // The function is unnamed, but we assign a variable to its reference
  util.puts("greet() returned: " + greet());
});

define("passing_functions", function() {
  // Functions can be bound to variables and passed in to other functions
  function greeter() {
    util.puts("welcome");
  }

  var caller = function (otherFunc) {
    otherFunc();
  };
  caller(greeter);
});

(function() {
  function greet(greeting, message) {
    console.dir(this);
    util.puts("hi! " + greeting + "\n> " + message);
  }

  define("calling_standard", function() {
    greet("calling with parentheses", "Love you");
  });

  define("calling_with_call", function() {
    greet.call(null, "with .call()", "You never write");
    //greet.call("x", "with .call()", "You never write");
  });

  define("calling_with_apply", function() {
    greet.apply(undefined, ["with .apply()", "Is it that bad?"]);
    //greet.apply(123, ["with .apply()", "Is it that bad?"]);
  });
})();


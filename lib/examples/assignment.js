
function aFunction() {
  // Never ever do this
  globalScopingSideEffect = "wuh oh";
};

define("global_scoping", function() {
  aFunction();
  if (typeof globalScopingSideEffect !== 'undefined') {
    util.puts(globalScopingSideEffect);
  }
});

define("local_scoping", function() {
  // Declare or define your variables like so
  var emptyLocalVar;
  var localVar = "this is safer";
  util.puts(localVar);
});

define("defaulting", function(){
  // A variable can be defaulted with the || operator
  var uninitialized = undefined;
  uninitialized = uninitialized || "now initialized";
  util.puts(uninitialized);

  // More on equality in a bit ...
});



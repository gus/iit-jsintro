function localFunction() {
  // Never ever do this
  globalScopingSideEffect = "wuh oh";
};

define("global_scoping", function() {
  localFunction();
  if (typeof globalScopingSideEffect !== 'undefined') {
    console.log(globalScopingSideEffect);
  }
});

define("local_scoping", function() {
  // Declare or define your variables like so
  var emptyLocalVar;
  var localVar = "this is safer";
  console.log(localVar);
});

define("defaulting", function(){
  // A variable can be defaulted with the || operator
  var uninitialized = undefined;
  uninitialized = uninitialized || "now initialized";
  console.log(uninitialized);
});



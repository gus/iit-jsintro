var sys = require("sys");
var demo = require("../lib/demo");

demo.define("simple", function(){
  // try, catch, finally mechanism for exception handling
  try {
    throw("wuh-oh");
  } catch (e) {
    sys.puts("Caught: " + e);
  } finally { 
    sys.puts("Cleaning up");
  }
});

demo.run();
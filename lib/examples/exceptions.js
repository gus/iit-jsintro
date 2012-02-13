define("simple", function() {
  // try, catch, finally mechanism for exception handling
  try {
    throw("wuh-oh");
  } catch (e) {
    util.puts("Caught: " + e);
  } finally { 
    util.puts("Cleaning up");
  }
});

define("check_exception", function(arg) {
  try {
    throw(arg);
  } catch (e) {
    var whatIsIt = "something strage";

    if (/^[0-9]+$/.test(e)) {
      whatIsIt = "a number";
    }

    util.puts("Caught: " + whatIsIt);
  //} catch (e2) {
  //  util.puts("What");
  } finally { 
    util.puts("Cleaning up");
  }
});


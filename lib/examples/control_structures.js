var sys = require("sys");
var demo = require("../lib/demo");

demo.define("if", function(answer) {
  // Your standard if / else if / else is available
  if (answer == "lame") {
    sys.puts("bzzt, wrong answer");
  } else if (answer == "neat") {
    sys.puts("ding");
  } else {
    sys.puts("i don't know what you're talking about");
  }
});
  
demo.define("switch", function(answer){
  // Switch is available too
  switch (answer) {
  case "lame":
    sys.puts("still wrong");
    break;
  case "neat":
    sys.puts("ding");
    break
  default:
    sys.puts("i still don't know what you're talking about");
  }
});

demo.define("ternary", function(answer){
  var response = (answer == "neat") ? "good job" : "make sense";
  sys.puts(response);
});

demo.define("loops", function() {
  var count = 0;
  // Your standard while loop is available
  while (count !== 2) {
    sys.puts("Count is " + count);
    count++;
  }
  
  sys.puts("---");
  
  // do while is also available
  do {
    sys.puts("Count is " + count); 
    count++;
  } while (count !== 4);
  
  sys.puts("---");
  
  // As is the for loop
  for (var i = 0; i < 5; i++) {
    sys.puts("Count is " + i);
  }
});

demo.run();
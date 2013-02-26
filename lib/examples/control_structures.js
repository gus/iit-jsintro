
define("if", function(answer) {
  // Your standard if / else if / else is available
  if (answer == "lame") {
    util.puts("bzzt, wrong answer");
  } else if (answer == "neat") {
    util.puts(cyan("ding"));
  } else {
    util.puts("i don't know what you're talking about");
  }
});

define("switch", function(answer){
  // Switch is available too
  switch (answer) {
  case "lame":
    util.puts("still wrong");
    break;
  case "neat":
    util.puts(cyan("ding"));
    break;
  default:
    util.puts("i still don't know what you're talking about");
    break;
  }
});

define("ternary", function(answer){
  var response = (answer == "neat") ? cyan("good job") : "make sense";
  util.puts(response);
});

define("loops", function() {
  var count = 0;
  // Your standard while loop is available
  while (count !== 2) {
    util.puts("Count is " + count);
    count++;
  }

  util.puts("---");

  // do while is also available
  do {
    util.puts("Count is " + count);
    count++;
  } while (count !== 4);

  util.puts("---");

  // As is the for loop
  for (var i = 0; i < 5; i++) {
    util.puts("Count is " + i);
  }
});


var sys = require("sys");
var demo = require("../lib/demo");

demo.define("regexp", function(input) {
  var matcher = /valid/;
  if (input && (input.match(matcher) !== null)) {
    sys.puts("matched against " + matcher);
  }
});

demo.define("numeric", function() {
  var pi = 3.14;
  var lucky = 47;
  sys.puts(pi);
  sys.puts(lucky);
});

demo.define("strings", function() {
  var title = "station to station";
  sys.puts(title);
});

demo.define("arrays", function() {
  var titles = ["station to station", "golden years"];
  var len = titles.length;
  for (var i = 0; i < len; i++) {
    sys.puts("title: " + titles[i]);
  }
});

demo.define("hashes", function() {
  var track = {title: "station to station"}; // declaring keys/properties during initialization
  track['length'] = "8:41";                  // adding keys/properties with bracket syntax
  track.album = 'stage';                     // addign keys/properties with dot notation
  
  sys.puts("title: " + track['title']);
  sys.puts("length: " + track.length);
});

demo.define("misc", function() {
  var present = true;
  var present = false;
  var present = null;
  var present = undefined;
  
  var exampleObj = {};
  sys.puts(typeof exampleObj.nonExistent);
  
  exampleObj.nonExistent = null;
  sys.puts(typeof exampleObj.nonExistent); // null is an object
});

demo.run();

define("regexp", function(input) {
  var matcher = /valid/;
  if (input && (input.match(matcher) !== null)) {
    util.puts("matched against " + matcher);
  }
});

define("numeric", function() {
  var pi = 3.14;
  var lucky = 47;
  util.puts(pi);
  util.puts(lucky);
});

define("strings", function() {
  var title = "station to station";
  var title = 'station to station';
  util.puts(title);
});

define("arrays", function() {
  var titles = [
   "station to station",
   "golden years"
  ];
  titles.push("foo bar");
  var len = titles.length;
  for (var i = 0; i < len; i++) {
    util.puts("title: " + titles[i]);
  }
  util.puts("title: " + titles[10]);
  util.puts(titles.pop());
  util.puts(titles.shift());
});

define("hashes", function() {
  var track = {title: "station to station"}; // declaring keys/properties during initialization
  track['length.something'] = "8:41";                  // adding keys/properties with bracket syntax
  track.album = 'stage';                     // adding keys/properties with dot notation
  
  util.puts("title: " + track['title']);
  util.puts("length: " + track['length.something']);
  util.puts("album: " + track['album']);
});

define("misc", function() {
  var present = true;
  var present = false;
  var present = null;
  var present = undefined;
  
  var exampleObj = {};
  util.puts(typeof exampleObj.nonExistent);
  
  exampleObj.nonExistent = null;
  util.puts(typeof exampleObj.nonExistent); // null is an object
});

define("builtin_types", function () {
  util.puts(typeof true); // boolean
  util.puts(typeof "Foo"); // string
  util.puts(typeof 123); // number
  util.puts(typeof (function (){})); // function

  util.puts(typeof undefined); // undefined

  util.puts(typeof ["a", 123]); // object
  util.puts(typeof {}); // object
  util.puts(typeof null); // object
});



define("strings", function() {
  var doubleQuoteTitle = "station to station",
      singleQuoteTitle = 'station to station';
  util.puts("Double quote [" + doubleQuoteTitle + "]");
  util.puts("Single quote [" + singleQuoteTitle + "]");
});

define("numeric", function() {
  var pi = 3.14;
  var lucky = 47;
  util.puts(pi);
  util.puts(lucky);
});

define("arrays", function() {
  var titles = [
   "station to station",
    4737347
  ];

  titles.push("foo bar");

  for (var i = 0, len=titles.length; i < len; i++) {
    util.puts("title: " + titles[i]);
  }
  util.puts("title: " + titles[10]);
  util.puts("popped title:" + titles.pop());
  util.puts("shifted title:" + titles.shift());
});

define("hashes", function() {
  // declaring keys/properties during initialization
  var track = {title: "station to station"};
  // adding keys/properties with bracket syntax
  track['length.something'] = "8:41";
  // adding keys/properties with dot notation
  track.album = 'stage';

  util.puts("title: " + track['title']);
  util.puts("length: " + track['length.something']);
  util.puts("album: " + track['album']);
});

define("regexp", function(input) {
  var matcher = /valid/;
  if (input && (input.match(matcher) !== null)) {
    util.puts("matched against " + matcher);
  }
});

define("misc", function() {
  var var1 = true,
      var2 = false,
      var3 = null,
      var4 = undefined;

  var exampleObj = {};
  util.puts(typeof exampleObj.nonExistent);

  exampleObj.nonExistent = null;
  util.puts(typeof exampleObj.nonExistent); // null is an object
});

define("builtin_types", function () {
  util.puts(typeof true);             // boolean
  util.puts(typeof "Foo");            // string
  util.puts(typeof 123);              // number
  util.puts(typeof (function () {})); // function

  util.puts(typeof undefined);        // undefined

  util.puts(typeof ["a", 123]);       // object
  util.puts(typeof {});               // object
  util.puts(typeof null);             // object
});


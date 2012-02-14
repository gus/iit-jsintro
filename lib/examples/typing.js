
define("dynamic_typing", function(){
  // album starts off as a string
  var album = 'heroes';
  util.puts(album);
  
  // the language allows the same variable to be an integer
  var album = 3;
  util.puts(album);  
});

define("duck_typing", function(){
  var customObject = {};
  customObject.toString = function() {
    return "i'm a custom object";
  };

  // util.puts doesn't care what you hand it,
  // as long as it responds to toString()
  util.puts([1,2,3,4]);
  util.puts(customObject);

  // Can you do duck typing in Java?
});

define("boolean_coercion", function() {
  // Implicit type coercion to booleans WILL bite you
  if (0) {
    util.puts("We never get here");
  };

  if ('') {
    util.puts("Nor here");
  };

  var status = 0;

  // Strict equality operators are your friend
  if (status !== false) {
    util.puts("We want to get here");
  };  
});

define("type_coercion", function(){
  // Watch for implicit type conversation between strings and numeric types
  util.puts(3 + '5');  
});

define("misc_casting", function(){
  util.puts(new Date);  
  util.puts(new Date().getTime());  
  util.puts(+new Date);  
  util.puts(10 + new Date);  
  util.puts(10 + +new Date);  
});


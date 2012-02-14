var util = require('util');

function Cup(initialCapacity) {
  this.capacity = initialCapacity || 12;
  this.volume = 0;

  this.add = function (v) {
    if (v > this.capacity) { throw("Too much coffee"); }
    this.volume += v;
  };

  this.toString = function () {
    return "Capacity: " + this.capacity + " Volume: " + this.volume;
  };
}

var cup = new Cup();
cup.add(parseInt(process.argv[2] || 0));
util.puts(cup);


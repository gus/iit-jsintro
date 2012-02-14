
// - should be able to add liquid
// - should be able to remove liquid
// - should be able to have cup of any size
// - what happens if we put in too much?
// - what happens if we remove too much?

function Cup(initialCapacity) {
  this.capacity = initialCapacity || 12;
  this.volume = 0;

  this.add = function (v) {
    if (v > this.capacity) { throw("Too much coffee"); }
    this.volume += v;
  };
}

/*
 * Tests
 */
var vows = require('vows'),
    assert = require('assert');

vows.describe("A Cup").addBatch({
  'is created': {
    topic: function () {
      return new Cup();
    },

    'should have a default capacity': function (cup) {
      assert.equal(cup.capacity, 12);
    },

    'should be empty': function (cup) {
      assert.equal(cup.volume, 0);
    }
  },

  'is created with 14u capacity': {
    topic: function () {
      return new Cup(14);
    },

    'should have a default capacity': function (cup) {
      assert.equal(cup.capacity, 14);
    },

    'should be empty': function (cup) {
      assert.equal(cup.volume, 0);
    }
  },

  'can have liquid added': {
    topic: function () {
      var cup = new Cup();
      cup.add(1);
      return cup;
    },

    'should have volume': function (cup) {
      assert.equal(cup.volume, 1);
    }
  },

  'can not have too much liquid added': {
    topic: function () {
      var cup = new Cup();
      try {
        cup.add(1000);
      } catch (e) {
        return e;
      }
      return "whoops";
    },

    'should throw up': function (e) {
      assert.equal(e, "Too much coffee");
    }
  }
}).run();


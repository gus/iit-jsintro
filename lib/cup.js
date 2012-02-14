
var Cup = {
  volume: 0
};

/*
 * Tests
 */
var vows = require('vows'),
    assert = require('assert');

vows.describe("").addBatch({
  'A Cup': {
    topic: function () {
      return Object.create(Cup); // Object.create provided for free by node.js
    },

    'what?': function (cup) {
      assert.equal(cup, "what");
    }
  }
}).run();


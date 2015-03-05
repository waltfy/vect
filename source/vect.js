'use strict';

module.exports = {

  magnitude: function magnitude(a) {
    return Math.sqrt(a.reduce(function (fold, n) {
      return fold + Math.pow(n, 2);
    }, 0));
  },

  // (alias)
  mag: function mag() {
    return this.magnitude.apply(this, [].slice.call(arguments));
  },

  dot: function dot(a, b) {
    var small, large;

    if (a.length >= b.length) {
      large = a;
      small = b;
    } else {
      large = b;
      small = a;
    }

    return small.reduce(function (fold, n, index) {
      fold += n * large[index];
      return fold;
    }, 0);
  },

  angle: function angle(a, b) {
    return this.dot(a, b) / (this.magnitude(a) * this.magnitude(b));
  }
};

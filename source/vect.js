'use strict';

function findShortest(list) {
  var cachedIndex = 0;
  var smallest = Infinity;
  list.forEach(function (item, index) {
    if (item.length < smallest) {
      cachedIndex = index;
      smallest = item.length;
    }
  });
  return cachedIndex;
};

module.exports = {

  isVector: function isVector(a) {
    // is a array
    // are all of the elements in that array numbers?
    return false;
  },

  add: function add() {
    var vectors = [].slice.call(arguments);
    return vectors[findShortest(vectors)]
      .map(function (item, index) {
        return vectors.reduce(function (fold, v) {
          fold += v[index];
          return fold;
        }, 0);
      })
  },

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

var vect = require('../');
var test = require('tap').test;

/* sample vectors */
var V = {
  a: [1, 2, 3],
  b: [99, 1, 5],
  c: [0, 0, 0],
  d: [1000, 100, 10, 0, 1, 2, 3, 4, 5]
};

test('vect', function (t) {

  t.test('add', function (t) {
    t.deepEqual(vect.add(V.a, V.b, V.c), [100, 3, 8], 'addition of abc is correct');
    t.end();
  });

  t.test('magnitude', function (t) {
    t.equal(vect.magnitude(V.a), 3.7416573867739413, 'magnitude of a is correct');
    t.equal(vect.magnitude(V.b), 99.13122616007531, 'magnitude of b is correct');
    t.equal(vect.magnitude(V.c), 0, 'magnitude of c is correct');
    t.equal(vect.magnitude(V.d), 1005.0646745359226, 'magnitude of d is correct');
    t.equal(vect.mag(V.a), 3.7416573867739413, 'magnitude alias works');
    t.end();
  });

  t.test('dot product', function (t) {
    t.equal(vect.dot(V.a, V.a), 14, 'dot product of aa is correct');
    t.equal(vect.dot(V.a, V.b), 116, 'dot product of ab is correct');
    t.equal(vect.dot(V.c, V.c), 0, 'dot product of cc is correct');
    t.equal(vect.dot(V.d, V.d), 1010155, 'dot product of dd is correct');
    t.end();
  });

  t.test('angle (cosine similarity)', function (t) {
    t.equal(vect.angle(V.a, V.a), 1, 'angle bween aa is 1');
    t.equal(vect.angle(V.d, V.d), 1, 'angle bween dd is 1');
    t.equal(vect.angle(V.a, V.b), 0.31274004431034946, 'angle bween a b is correct');
    t.end();
  });
});

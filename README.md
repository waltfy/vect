# vect
A Lightweight (Multidimensional) Vector Computation Library

**NOTE** that this library makes an assumption that vectors are simply lists (`Array`) of `numbers`, such as `[1, 2, 3, 4]`.

## Install

`npm install vect` and require it in your script `var vect = require('vect');`.

## API

Summary:
  - [Addition](#addition---vectadd)
  - [Magnitude](#magnitude---vectmaga-or-vectmagnitudea)
  - [Dot Product](#dot-product---vectdota-b)
  - [Cosine Similarity](#cosine-similarity-angle---vectanglea-b)

### Addition - `vect.add([a, ...])`
Adds `n` vectors, returning a vector `Array`.
```js
vect.add([1, 2, 3], [3, 2, 1]); // [4, 4, 4]
```

### Magnitude - `vect.mag(a)`, or `vect.magnitude(a)`
Computes the magnitude of a vector `a`, returning a `number`.
```js
vect.mag([1, 2, 3]); // 3.7416573867739413
```

### Dot Product - `vect.dot(a, b)`
Computes the dot product of two vectors `a` and `b`, returning a scalar (`Array`).
```js
vect.dot([1, 2, 3], [3, 2, 1]); //
```

### Cosine Similarity (Angle) - `vect.angle(a, b)`
Computes the cosine similarity (or angle between) two vectors `a` and `b`, returning a `number`.
```js
vect.angle([1, 2, 3], [1, 2, 3]); // 1
```

## Change Log
`1.0.0` - Initial release.

## Licensing

The MIT License (MIT)

Copyright (c) 2015 Walter Carvalho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

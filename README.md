# vect
A (Multidimensional) Vector Maths Lightweight Library

**NOTE** that this library makes an assumption that vectors are simply lists (or `Array`s) of `numbers`, such as `[1, 2, 3, 4]`.

## API

Summary:
  - [Addition](#addition---vectadda-b)
  - [Magnitude](#magnitude---vectmaga-or-vectmagnitudea)
  - [Dot Product](#dot-product---vectdota-b)
  - [Cosine Similarity](#cosine-similarity-angle---vectanglea-b)

### Addition - `vect.add(a, b)`
Adds two vectors `a` and `b`, returning a `number`.
```js
vect.add([1, 2, 3], [3, 2, 1]); // x
```

### Magnitude - `vect.mag(a)`, or `vect.magnitude(a)`
Computes the magnitude of a vector `a`, returning a `number`.
```js
vect.mag([1, 2, 3]); // x
```

### Dot Product - `vect.dot(a, b)`
Computes the dot product of two vectors `a` and `b`, returning a `number`.
```js
vect.dot([1, 2, 3], [3, 2, 1]); //
```

### Cosine Similarity (Angle) - `vect.angle(a, b)`
Computes the cosine similarity (or angle between) two vectors `a` and `b`, returning a `number`.
```js
vect.angle([1, 2, 3], [1, 2, 3]); // 1
```

## Change Log
`0.0.1` - Initial release.

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

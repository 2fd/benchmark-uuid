# benchmark-uuid

[![Benchmark](https://github.com/2fd/benchmark-uuid/actions/workflows/benchmark.yml/badge.svg?branch=master)](https://github.com/2fd/benchmark-uuid/actions/workflows/benchmark.yml)

This benchmark is used to compare the performance of different UUID v4 implementations in NodeJS.

- [`node node.js`](./node.js)
- [`node browser.js`](./browser.js)
- [`node uuid3.js`](./uuid3.js)
- [`node uuid7.js`](./uuid7.js)
- [`node uuid8.js`](./uuid8.js)
- [`node uuid9.js`](./uuid9.j)

## Usage

```sh
  npm start
```

## Results

NodeJS implementation (`import { randomUUID } from 'crypto'`), Web implementation (`crypto.randomUUID`) and uuid@9 (`import { v4 } from 'uuid'`) are indistinguishable in performance, while uuid@8 is 10x slower and uuid@7 and uuid@3 are 40x slower.

### Node 16

```txt
'node node.js' ran
    1.02 ± 0.05 times faster than 'node browser.js'
    1.03 ± 0.04 times faster than 'node uuid9.js'
   10.10 ± 0.38 times faster than 'node uuid8.js'
   43.10 ± 1.73 times faster than 'node uuid7.js'
   43.27 ± 1.70 times faster than 'node uuid3.js'
```

### Node 18

```txt
'node browser.js' ran
    1.01 ± 0.01 times faster than 'node node.js'
    1.04 ± 0.01 times faster than 'node uuid9.js'
    9.07 ± 0.17 times faster than 'node uuid8.js'
   36.48 ± 0.31 times faster than 'node uuid3.js'
   36.56 ± 0.42 times faster than 'node uuid7.js'
```

### Node 20

```txt
  'node browser.js' ran
    1.00 ± 0.01 times faster than 'node node.js'
    1.03 ± 0.01 times faster than 'node uuid9.js'
   12.30 ± 0.10 times faster than 'node uuid8.js'
   52.17 ± 0.72 times faster than 'node uuid3.js'
   52.75 ± 0.79 times faster than 'node uuid7.js'
```

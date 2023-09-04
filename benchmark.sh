hyperfine --warmup 5 \
  'node benchmark/node.js' \
  'node benchmark/browser.js' \
  'node benchmark/ulid1.js' \
  'node benchmark/ulid2.js' \
  'node benchmark/uuid3.js' \
  'node benchmark/uuid7.js' \
  'node benchmark/uuid8.js' \
  'node benchmark/uuid9.js'
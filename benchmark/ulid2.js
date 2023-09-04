const ulid = require('ulid2');

for (let i = 0; i < 10_000_000; i++) {
  ulid();
}
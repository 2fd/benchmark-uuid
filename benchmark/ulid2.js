const ulid = require('ulid2');

for (let i = 0; i < 100_000; i++) {
  ulid();
}
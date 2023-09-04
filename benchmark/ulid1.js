const ulid = require('ulid1');

for (let i = 0; i < 10_000_000; i++) {
  ulid();
}
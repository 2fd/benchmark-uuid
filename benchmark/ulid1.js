const ulid = require('ulid1');

for (let i = 0; i < 100_000; i++) {
  ulid();
}
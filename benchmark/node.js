const { randomUUID } = require('crypto');

for (let i = 0; i < 10_000_000; i++) {
  randomUUID();
}
const { v4 } = require('uuid7');

for (let i = 0; i < 10_000_000; i++) {
  v4();
}
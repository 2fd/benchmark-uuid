const { v4 } = require('uuid9');

for (let i = 0; i < 100_000; i++) {
  v4();
}
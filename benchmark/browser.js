const { webcrypto } = require('crypto');

for (let i = 0; i < 100_000; i++) {
  webcrypto.randomUUID();
}
// tests/index.test.js
const { app } = require('google-play-scraper');

test('Test Google Play Scraper app function', async () => {
  const appDetails = await app({ appId: 'com.example.app' });
  expect(appDetails).toHaveProperty('title');
});

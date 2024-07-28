const { app } = require('google-play-scraper');

test('should retrieve app details from Google Play Scraper for Facebook app', async () => {
  const appDetails = await app({ appId: 'com.facebook.katana' });
  expect(appDetails).toHaveProperty('title');
});

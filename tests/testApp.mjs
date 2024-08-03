import gplay from 'google-play-scraper';

//app
gplay.app({appId: 'com.google.android.apps.translate'})
.then(console.log, console.log)
.catch(error => {
console.error('Error during retrieving app details:', error);
});

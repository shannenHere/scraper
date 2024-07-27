import gplay from 'google-play-scraper';

//use facebook as example
gplay.app({ appId: 'com.facebook.katana' }).then(app => {
    console.log('App Details:', app);
}).catch(error => {
    console.error('Error fetching app details:', error);
});
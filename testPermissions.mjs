import gplay from "google-play-scraper";

//permissions
gplay.permissions({appId: "com.facebook.katana"}).then(console.log)
.catch(error => {
    console.error('Failure in retrieving permissions: ', error)
});
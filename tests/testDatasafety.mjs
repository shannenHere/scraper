import gplay from "google-play-scraper";

//datasafety
gplay.datasafety({appId: "com.facebook.katana"}).then(console.log)
.catch(error => {
    console.error('Failure in retrieving datasafety: ', error)
});

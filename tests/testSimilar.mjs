import gplay from "google-play-scraper";

//similar
gplay.similar({appId: "com.facebook.katana"}).then(console.log)
.catch(error => {
    console.error('Failure in receiving similarapps: ', error)
});

import gplay from "google-play-scraper";

//categories
gplay.categories().then(console.log)
.catch(error => {
    console.error('Failure in retrieving categories: ', error)
});
import gplay from "google-play-scraper";

//suggest
gplay.suggest({term: 'panda'}).then(console.log)
.catch (error => {
    console.error('Failure in retrieving suggestion: ', error)
});
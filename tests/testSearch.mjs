import gplay from "google-play-scraper";

//search
gplay.search({
    term: "panda",
    num: 2
}).then(console.log, console.log)
.catch(error => {
console.error('Failure in retrieving result of searching: ', error);
});

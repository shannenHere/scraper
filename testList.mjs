import gplay from "google-play-scraper";

//list

gplay.list({
    category: gplay.category.GAME_ACTION,
    collection: gplay.collection.TOP_FREE,
    num: 2
})
.then(console.log, console.log)
.catch (error => {
console.error("Error during retrieving list of apps from collections: ", error);
});
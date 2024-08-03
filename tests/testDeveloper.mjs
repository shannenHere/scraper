import gplay from "google-play-scraper";

//developer
gplay.developer({devId: "TNG Digital Sdn Bhd"}).then(console.log)
.catch(error => {
    console.error('Failure in retrieving developer name: ', error);
});

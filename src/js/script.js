window.addEventListener('resize', function () {
    log();
});

window.addEventListener('load', function () {
    log();
});

function log() {
    console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`); // Ab ES6
}

function getViewportWidth() {
    return window.innerWidth ||
        document.documentElement.clientWidth;
}

function Raum(nummer, bezeichnung, gebaeude, kapazitaet, ausstattungsmerkmale) {
    this.nummer = nummer;
    this.bezeichnung = bezeichnung;
    this.gebaeude = gebaeude;
    this.kapazitaet = kapazitaet;
    this.ausstattungsmerkmale = ausstattungsmerkmale;
}


/*Nummer
Bezeichnung
Gebäude
Kapazität
Ausstattungsmerkmale.*/